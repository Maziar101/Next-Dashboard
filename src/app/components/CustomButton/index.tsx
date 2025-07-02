import Link from "next/link";
import styles from "@/app/components/CustomButton/customButton.module.scss";
import { CSSProperties, ReactNode } from "react";

interface myProps {
  href?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export default function CustomLink(props: myProps) {
  const { href = "/", style = {}, children } = props;
  return (
    <Link href={href} className={styles.button} style={style}>
      {children}
    </Link>
  );
}
