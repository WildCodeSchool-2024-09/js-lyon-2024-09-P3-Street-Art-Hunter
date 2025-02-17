import { toast } from "react-toastify";

export function ToasterSucess(message: string) {
  toast.success(message, {
    className: "toast-message",
    position: window.innerWidth < 768 ? "top-left" : "bottom-right",
  });
}

export function ToasterWarning(message: string) {
  toast.warn(message, {
    position: window.innerWidth < 768 ? "top-left" : "bottom-right",
  });
}

export function ToasterInformation(message: string) {
  toast.info(message, {
    className: "toast-message",
    position: window.innerWidth < 768 ? "top-left" : "bottom-right",
  });
}

export function ToasterError(message: string) {
  toast.error(message, {
    position: window.innerWidth < 768 ? "top-left" : "bottom-right",
  });
}
