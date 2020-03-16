<template>
  <div class="home" ref="spinner">
    <div class="header" v-if="pageReady" ref="suso">
      <ImgSlider :images="service.img" class="slider"></ImgSlider>
      <div class="info">
        <p class="title">{{service.name}}</p>
        <p>{{service.description}}</p>
        <div class="timetable">
          <p class="title subtitle">Horarios disponibles</p>
          <Datepicker :options="datePickerOpts" v-model="selectedDate"></Datepicker>
          <Chip
            v-for="(hour, i) in availableHours"
            :key="i"
            :text="hour.start"
            :isClickable="true"
            @select="selectHour"
          >
            <span>{{hour.start}} - {{hour.end}}</span>
          </Chip>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { BookingService } from "../services/Booking.service";
import { SpaService, TimetableI } from "../models/SpaService";
import ImgSlider from "@/components/ImgSlider.vue";
import Datepicker from "@/components/Datepicker.vue";
import Chip from "@/components/Chip.vue";
import { AsyncPage } from "@/views/GenericPage";
import {
  spanishMonths as months,
  spanishMonthsShort as monthsShort,
  spanishWeekDays as weekDays,
  spanishWeekDaysShort as weekdaysShort,
  spanisWeekDaysVeryShort as weekdaysAbbrev,
  spanishDefaultDatePickerOptions,
  DateWithoutOffset
} from "@/utils/Date.utils";

@Component({
  components: {
    ImgSlider,
    Datepicker,
    Chip
  }
})
export default class Service extends AsyncPage {
  // servicio
  private readonly bookingService: BookingService = new BookingService();
  private service: SpaService | undefined = undefined;
  private selectedDate = new Date();
  private datePickerOpts = {
    minDate: new Date(),
    setDefaultDate: true,
    defaultDate: this.selectedDate,
    yearRange: 2,
    ...spanishDefaultDatePickerOptions
  };
  async mounted() {
    const { id } = this.$route.params;
    try {
      this.showSpinner();
      this.service = await this.bookingService.getServiceById(+id);
    } catch (error) {
      console.error(error);
    } finally {
      this.pageReady = true;
      this.hideSpinner();
    }
  }

  selectHour(event: any) {
    console.log(event);
  }
  get availableHours(): TimetableI[] {
    return (this.service as SpaService).getavailableHours(this.selectedDate);
  }
}
</script>

<style scoped>
.home {
  padding: 2%;
  height: 100%;
}

.header {
  display: flex;
  width: 100%;
}

.slider {
  flex-basis: 40%;
}

.info {
  padding: 0 2%;
  flex-basis: 60%;
}

.title {
  margin: 0;
  font-size: 2em;
  font-weight: bold;
}

.subtitle {
  font-size: 1.3em;
}
</style>
