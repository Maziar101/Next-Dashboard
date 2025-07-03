import { useUserStore } from "@/store/userStore";
import CustomLink from "../CustomButton";
import styles from "./userView.module.scss";

export default function UserView() {
  const {user} = useUserStore();
  return (
    <section className={styles.userform}>
      <div className={styles.about}>
        <h2>کاربر {user?.name?.first} <br/> خوش آمدید</h2>
        <p>با دکمه زیر وارد داشبورد شوید .</p>
        <CustomLink href="/dashboard">داشبورد</CustomLink>
      </div>
    </section>
  );
}
