"use client";

import React, { useEffect, useState } from "react";

import { Button } from "@/components/button/page";
import { Primarytext } from "@/components/primary-text/page";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { auth } from "@/constants/auth";
import { ADMIN_ROUTES } from "@/constants/routes";

export default function Home() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const storedEmail = email;
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleLogin = () => {
    const foundUser = auth.find(
      (user) => user.EMAIL === email && user.PASSWORD === password
    );
    if (foundUser) {
      sessionStorage.setItem("email", email);
      router.push(ADMIN_ROUTES.RENT_ADVANCE.absolutePath);
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };
  return (
    <main className="h-screen max-w-lg mx-auto pt-20">
      <div className="flex justify-center pb-10">
        <Image height={33} width={150} alt="Toolbox icon" src={"/next.svg"} />
      </div>
      <section className="text-zinc-200 body-font">
        <div className="px-5 mx-auto flex flex-wrap items-center">
          <div className=" bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
            <Primarytext size="lg" className="text-center">
              Login
            </Primarytext>
            <div className=" mb-4">
              <Primarytext size="sm">Email</Primarytext>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="demo@example.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className=" mb-4">
              <Primarytext size="sm">Password</Primarytext>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="123456"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <Button title="Login" onClick={handleLogin} />
          </div>
        </div>
      </section>
    </main>
  );
}
