<template>
  <section>
    <ImgSlider :images="service.img" class="slider"></ImgSlider>
    <div class="data">
      <p class="title">{{service.name}}</p>
      <p class="description">{{service.description}}</p>
      <p class="price">{{service.price}}€</p>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { SpaService } from "../models/SpaService";
import ImgSlider from "@/components/ImgSlider.vue";

@Component({
  components: {
    ImgSlider
  }
})
export default class Card extends Vue {
  @Prop({ type: SpaService }) service!: SpaService;
}
</script>

<style scoped>
section {
  border: 1px solid;
  display: flex;
}
.slider {
  --width: 25%;
  width: var(--width);
  height: 100%;
}
.data {
  padding: 2%;
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  max-height: 100%;
}
.data > *{
  flex-shrink: 2;
  margin: 0;
}
.title {
  font-weight: bold;
  font-size: 1.25em;
}
.description {
  flex-grow: 1;
}
.price {
  text-align: end;
  font-size: 2em;
}
@media screen and (max-width: 576px) {
  .slider {
    --width: 100%;
  }
}
</style>