import { useUserStore } from "@/store/userStore";
import HotToast from "@/utils/HotToast";

export const useFetch = () => {
  const { logout } = useUserStore();

  const fetchData = async (url: string, option = {}) => {
    try {
      const res = await fetch(url, option);
      if (res?.status !== 401) {
        logout();
      }
      const data = await res.json();
      return { res: data, status: res?.status };
    } catch (err) {
      HotToast("error", "There was a problem in connecting!");
      throw err;
    }
  };
  return { fetchData };
};
