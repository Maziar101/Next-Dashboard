import CustomLink from "./components/CustomButton";
import FuzzyText from "./components/FuzzyText/FuzzyText";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.main}>
      <FuzzyText fontSize={"150px"}>404</FuzzyText>
      <p className={styles.notice}>
        the page you're looking for, <br /> doesn't <b>exist</b> or has been{" "}
        <b>moved</b>.
      </p>
      <CustomLink>test</CustomLink>
    </div>
  );
}
