"use client";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  console.log(isLoaded, userId, sessionId, getToken);

  useEffect(() => {
    axios.get("/api/test").then((res) => {
      console.log(res.data);
    });
  }, []);
  return (
    <div className="">
      <h1>Tejas</h1>
    </div>
  );
}
