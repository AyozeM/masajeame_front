<template>
  <div class="canvas">
    <div class="controls paginator">{{this.paginator}}</div>
    <span class="controls left button" @click.stop="changeImg(-1)">
      <i class="material-icons">keyboard_arrow_left</i>
      </span>
    <span class="controls right button" @click.stop="changeImg(1)">
      <i class="material-icons">keyboard_arrow_right</i>
      </span>
    <img :src="actualImage" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class ImgSlider extends Vue {
  @Prop() private images!: string[];
  private index = 0;

  changeImg(direction: number) {
    const tempIndex = this.index + direction;
    if (tempIndex > this.images.length - 1) {
      this.index = 0;
    } else if (tempIndex < 0) {
      this.index = this.images.length - 1;
    } else {
      this.index = tempIndex;
    }
  }
  get actualImage() {
    return this.images[this.index];
  }

  get paginator() {
    return `${this.index + 1}/${this.images.length}`;
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
.canvas {
  display: inline-flex;
  position: relative;
  --font-color: white;
}
.canvas:hover>.controls{
  opacity: 1;
}
.button {
  display: flex;
  position: absolute;
  color: var(--font-color);
  font-size: 1.5em;
  height: 100%;
  padding: 1%;
  align-items: center;
  cursor: pointer;
  transition: 0.25s;
}
.controls{
  opacity: 0;
  transition: .25s;
  user-select: none;
}
.button:hover {
  background: rgba(0, 0, 0, 0.5);
}
.left {
  left: 0;
}
.right {
  right: 0;
}
.paginator {
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  top: 0;
  color: var(--font-color);
}
</style>