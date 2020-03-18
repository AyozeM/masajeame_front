<template>
  <div>
    <div class="input-field">
      <!-- <i class="material-icons prefix">search</i> -->
      <input id="icon_prefix" type="text" v-model="text" @keyup="search" />
      <label for="icon_prefix">Buscador</label>
    </div>
    <div>
      <label>Ordenar</label>
      <p v-for="(option,i) in SortOptions" :key="i">
        <label>
          <input
            name="order"
            type="radio"
            :value="option.value"
            v-model="selectedSort"
            @change="sort"
          />
          <span>{{option.label}}</span>
        </label>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from "vue-property-decorator";
import { SortEnum } from "@/typings/Sort.enum";

@Component
export default class ListControls extends Vue {
  private text = "";
  private selectedSort = null;
  private SortOptions = [
    {
      label: "Precio ascendente",
      value: SortEnum.asc
    },
    {
      label: "Precio descendente",
      value: SortEnum.desc
    }
  ];

  @Emit() sort() {
    return this.selectedSort;
  }
  @Emit() search() {
    return this.text;
  }
}
</script>

<style>
</style>
