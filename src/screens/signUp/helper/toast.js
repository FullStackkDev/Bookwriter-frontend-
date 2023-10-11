import { toast } from "react-toastify";

export const showToast = (message, type = "success") => {
  toast[type](message, {
    position: "bottom-left",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
  });
};
