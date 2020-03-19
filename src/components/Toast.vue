<template>
  <span>{{message}}</span>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Toast extends Vue {
  @Prop() private message!: string;
}
</script>

<style scoped>
span {
  color: red;
}
</style>