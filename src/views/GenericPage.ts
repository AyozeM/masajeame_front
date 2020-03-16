import { Vue, Component } from "vue-property-decorator";
import Spinner from "@/components/Spinner.vue";


export class GenericPage extends Vue {
  protected pageReady!: boolean;
}


@Component({
  components: {
    Spinner
  }
})
export class AsyncPage extends GenericPage {
  private spinner!: Element;
  constructor() {
    super();
    this.pageReady = false;
  }


  protected showSpinner(customContainer?: Element) {
    const instance = new Spinner();
    instance.$mount();
    const container: Element = customContainer || (this.$refs.spinner as Element)
    this.spinner = container.appendChild(instance.$el);
  }

  protected hideSpinner(customContainer?: Element) {
    const container: Element = customContainer || (this.$refs.spinner as Element)
    container.removeChild(this.spinner);
  }
}