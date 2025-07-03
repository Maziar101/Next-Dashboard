import CustomLink from "../CustomButton";
import styles from "./guestView.module.scss";

export default function GuestView() {
  return (
    <section className={styles.guestform}>
      <div className={styles.about}>
        <h2>خوش آمدید</h2>
        <p>برای استفاده از قابلیت های وبسایت وارد شوید .</p>
        <CustomLink href="/auth">ورود</CustomLink>
      </div>
    </section>
  );
}
