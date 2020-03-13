<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo center">{{name | capitalize}}</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  filters:{
    capitalize: (text: string) => text.charAt(0).toUpperCase() + text.slice(1)
  }
})
export default class Header extends Vue{
  @Prop() private name!: string;
}
</script>