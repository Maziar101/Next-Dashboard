"use client";

import { useUserStore } from "@/store/userStore";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation"; // ✅ درست شد
import { useEffect, useTransition } from "react";
import styles from "./auth.module.scss";
import CustomField from "../components/CustomField";
import * as yup from "yup";
import HotToast from "@/utils/HotToast";
import { useFetch } from "@/hooks/useFetch";

export default function AuthPage() {
  const [isPending, startPending] = useTransition();
  const { login, token } = useUserStore();
  const { fetchData } = useFetch();
  const router = useRouter(); // ✅ درست شد

  const initialValues = {
    phone: "",
  };

  useEffect(() => {
    if (token) {
      router.push("/");
    }
  }, [token, router]);

  interface formValues {
    phone: string;
  }

  const handleSubmit = (values: formValues) => {
    startPending(async () => {
      try {
        const { res, status } = await fetchData(
          "https://randomuser.me/api/?results=1&nat=us"
        );
        if (status !== 200) {
          return HotToast("error", "مشکلی در دریافت اطلاعات کاربر رخ داد !");
        }
        login({ user: res?.results[0], token: res?.results[0]?.login?.md5 });
        router.push("/dashboard");
      } catch (err) {
        HotToast("error", "مشکلی در اتصال رخ داد !");
      }
    });
  };

  const validationSchema = yup.object().shape({
    phone: yup
      .string()
      .required("شماره تلفن الزامی است !")
      .matches(/^09\d{9}$/, "شماره تلفن معتبر نیست !"),
  });

  return (
    <div className={styles.main}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleChange }) => (
          <Form className={styles.form}>
            <div className={styles.formdiv}>
              <h2>ورود</h2>
              <div className={styles.field}>
                <p>شماره تلفن :</p>
                <CustomField
                  name="phone"
                  values={values}
                  handleChange={handleChange}
                  error={errors.phone}
                  placeholder="شماره تلفن خود را وارد کنید ..."
                  maxLength={11}
                />
              </div>
              <button className={styles.button} type="submit">
                ورود
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
