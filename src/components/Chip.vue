<template>
  <div class="chip" @click="select" :class="{clickable: isClickable}">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from "vue-property-decorator";

@Component
export default class Chip extends Vue {
  @Prop() private text!: string;
  @Prop({ default: false }) private isClickable!: boolean;

  @Emit("select")
  private select() {
    return this.text;
  }
}
</script>

<style scoped>
.clickable {
  cursor: pointer;
  transition: 0.25s;
  border: 1px solid transparent;
}
</style>