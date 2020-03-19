import Spinner from "@/components/Spinner.vue";
import { toast } from "materialize-css";
import Toast from "@/components/Toast.vue";
import { Component, Vue } from "vue-property-decorator";

type toastType = 'danger' | 'info' | 'success';
export class GenericPage extends Vue {
  protected pageReady!: boolean;

  /**
   * Muestra pequeños mensajes de ayuda al usuario
   * @param message texto a mostrar
   * @param type importancia del toast
   */
  protected showToast(message: string, type: toastType = 'info'): void {
    const toastInstance = new Toast({ propsData: { message } });
    toastInstance.$mount();
    toast({
      html: toastInstance.$el.innerHTML,
      classes: `toast ${type}`,
      completeCallback: () => {
        toastInstance.$destroy();
      }
    })
  }
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