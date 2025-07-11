"use client"

import { useUserStore } from "@/store/userStore";
import UserView from "@/app/components/UserView";
import GuestView from "@/app/components/GuestView";

export default function Home() {
  const { token } = useUserStore();
  return token ? <UserView /> : <GuestView />;
}
