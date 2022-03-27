import { toast } from "react-toastify";

export const info = (message) =>
  toast.info(message, {
    className: "black-background",
    position: "bottom-right",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const success = (message) =>
  toast.success(message, {
    className: "black-background",
    position: "bottom-right",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const warn = (message) =>
  toast.warn(message, {
    className: "black-background",
    position: "bottom-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export const error = (message) =>
  toast.error(message, {
    className: "black-background",
    position: "bottom-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
