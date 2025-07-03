import React from "react";
import styles from "./customField.module.scss";

interface myProps {
  name: string;
  type?: "text" | "number";
  values: Record<string, string>;
  placeholder: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
  maxLength?: number;
}

export default function CustomField(props: myProps) {
  const {
    name,
    type = "text",
    handleChange,
    values,
    placeholder,
    error,
    maxLength
  } = props;
  return (
    <>
      <input
        name={name}
        value={values[name]}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        className={styles.input}
        maxLength={maxLength}
      />
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
}
