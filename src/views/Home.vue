<template>
  <div class="home">
    <Card v-for="(service,index) in services" :key="index" :service="service" class="card"></Card>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import { BookingService } from "../services/Booking.service";
import { Vue } from "vue-property-decorator";
import { SpaService } from "../models/SpaService";
import Card from "@/components/Card.vue";

export default Vue.extend({
  name: "Home",
  components: {
    Card
  },
  data() {
    return {
      services: []
    };
  },
  async mounted() {
    try {
      this.services = (await BookingService.getServices()).data.map(
        (e: any) => new SpaService(e)
      );
      console.log(this.services);
    } catch (error) {
      console.error(error);
    }
  }
});
</script>

<style scoped>
.home {
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
