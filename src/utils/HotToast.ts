import toast from "react-hot-toast";

type ToastType = "success" | "error";

const HotToast = (type: ToastType, message: string) => {
  toast.dismiss();
  toast[type](message, {
    duration: 4000,
    style: {
      border: type === "error" ? "1px solid darkred" : "1px solid #4ade80",
      padding: "16px",
      color: "#1f2937",
      direction: "rtl",
      background: "#ecfdf5",
      borderRadius: "8px",
    },
  });
};

export default HotToast;