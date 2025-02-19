import { toast } from "react-toastify";

export function ToasterSuccess(message: string, theme: "light" | "dark") {
  toast.success(message, {
    className: theme === "light" ? "toast-light" : "toast-dark",
    position: window.innerWidth < 768 ? "top-left" : "bottom-right",
  });
}

export function ToasterWarning(message: string, theme: "light" | "dark") {
  toast.warn(message, {
    className: theme === "light" ? "toast-light" : "toast-dark",
    position: window.innerWidth < 768 ? "top-left" : "bottom-right",
  });
}

export function ToasterInformation(message: string, theme: "light" | "dark") {
  toast.info(message, {
    className: theme === "light" ? "toast-light" : "toast-dark",
    position: window.innerWidth < 768 ? "top-left" : "bottom-right",
  });
}

export function ToasterError(message: string, theme: "light" | "dark") {
  toast.error(message, {
    className: theme === "light" ? "toast-light" : "toast-dark",
    position: window.innerWidth < 768 ? "top-left" : "bottom-right",
  });
}
