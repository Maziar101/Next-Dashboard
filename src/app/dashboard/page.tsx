"use client";

import React, { useEffect } from "react";
import styles from "./dashboard.module.scss";
import { useUserStore } from "@/store/userStore";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const { token, user ,logout} = useUserStore();
  useEffect(() => {
    if (!token) {
      redirect("/auth");
    }
  }, [token]);
  return (
    <div className={styles.main}>
      <p>خوش اومدی {user?.name?.first}</p>
      <p>شماره تلفن شما : {user?.phone}</p>
      <button onClick={()=>logout()} className={styles.button}>خارج شدن</button>
    </div>
  );
}
