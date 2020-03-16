<template>
  <input type="text" class="datepicker" ref="input" />
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import M from "materialize-css";
@Component({
  props: {
    options: {
      type: Object
    }
  }
})
export default class Datepicker extends Vue {
  private actualDate!: Date;

  mounted() {
    const { options } = this.$props;
    M.Datepicker.init(
      this.$refs.input as Element,
      {
        onSelect: date => (this.actualDate = date),
        onClose: this.dateSelect,
        ...options
      } || undefined
    );
  }

  @Emit("input")
  dateSelect() {
    // se crea una nueva instancia para que no existan problemas de referencias
    return new Date(this.actualDate);
  }
}
</script>

<style>
</style>