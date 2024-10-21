import { createApp, h } from "vue";
import Modal from "../components/Modal.vue";

interface ModalOptions {
  title: string;
  content: any;
  onSubmit?: () => void;
  onClose?: () => void;
}

const modalService = {
  open(options: ModalOptions) {
    console.log("ModalOptions", options);

    const modalRoot = document.createElement("div");
    document.body.appendChild(modalRoot);

    const app = createApp({
      render() {
        return h(
          Modal,
          {
            visible: true,
            title: options.title,
            onClose: () => {
              if (options.onClose) options.onClose();
              closeModal(app, modalRoot);
            },
            onSubmit: () => {
              if (options.onSubmit) options.onSubmit();
              closeModal(app, modalRoot);
            },
          },
          { default: () => options.content }
        );
      },
    });

    app.mount(modalRoot);
  },
};

function closeModal(app: any, rootElement: HTMLElement) {
  app.unmount();
  document.body.removeChild(rootElement);
}

export default modalService;
