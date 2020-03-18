<template>
  <section class="home" ref="spinner">
    <list-controls class="controls" @search="filter = $event" @sort="sortServices($event)"></list-controls>
    <div class="grid">
      <Card
        v-for="(service,index) in filteredServices"
        :key="index"
        :service="service"
        class="card"
        @click.native="openDetails(service.id)"
      ></Card>
    </div>
  </section>
</template>

<script lang="ts">
import { BookingService } from "../services/Booking.service";
import { Vue, Component } from "vue-property-decorator";
import { SpaService } from "../models/SpaService";
import Card from "@/components/Card.vue";
import ListControls from "@/components/ListControls.vue";
import { SortEnum } from "@/typings/Sort.enum";
import { removeAccentMarks } from "@/utils/String.utils";
import { AsyncPage } from "./GenericPage";

@Component({
  components: {
    Card,
    ListControls
  }
})
export default class Home extends AsyncPage {
  // service
  private readonly bookingService = new BookingService();

  //data
  services: SpaService[] = [];
  filter = "";
  sortRule!: SortEnum;

  // lifehooks events
  mounted() {
    this.getServices();
  }

  async getServices() {
    try {
      this.showSpinner();
      this.services = await this.bookingService.getServices();
    } catch (error) {
      console.error(error);
    } finally {
      this.hideSpinner();
    }
  }
  //methods
  openDetails(id: number) {
    this.$router.push({ name: "service", params: { id: id.toString() } });
  }

  sortServices(sortRule: SortEnum): void {
    this.services = this.services.sort((a: SpaService, b: SpaService) =>
      sortRule === SortEnum.asc ? a.price - b.price : b.price - a.price
    );
  }

  // computed properties
  // Para el filtro es utilizada una computed property porque nos permite mantener el valor original del array
  get filteredServices(): SpaService[] {
    let services = this.services;
    if (this.filter) {
      services = this.services.filter((e: SpaService) =>
        removeAccentMarks(e.name.toLowerCase()).includes(
          removeAccentMarks(this.filter.toLowerCase())
        )
      );
    }
    return services;
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-grow: 1;
}

.controls {
  flex-basis: 25%;
  padding: 1%;
  background: rgba(235, 234, 234, 0.801);
}

.grid {
  --columns: 2;
  display: grid;
  grid-template-columns: repeat(var(--columns), 1fr);
  grid-gap: 2%;
  padding: 2%;
}

.card {
  height: 25vh;
}

@media screen and (max-width: 576px) {
  .home {
    --columns: 1;
  }

  .home .slider {
    --width: 50%;
  }
}
</style>
