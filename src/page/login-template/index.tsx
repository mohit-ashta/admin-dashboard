"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ADMIN_ROUTES } from "@/constants/routes";
import { Primarytext } from "@/components/atoms/primary-text/page";
import { Button } from "@/components/atoms/button/page";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { signInType } from "@/constants/types";
import { signInSchema } from "@/constants/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputField } from "@/components/atoms/input/page";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useGetUsersQuery } from "@/redux/authSlice/authSlice";
import { TOKEN } from "@/constants/common";
import { toast } from "sonner";

export const SignInTemplate = () => {
  const router = useRouter();
  const { data: userData } = useGetUsersQuery("getUsers");

  const [view, setView] = useState(false);
  const methods = useForm({ resolver: yupResolver(signInSchema) });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;

  const onSubmit: SubmitHandler<signInType> = (data) => {
    const IsMatchUser = userData.some(
      (user: signInType) =>
        user.email === data.email && user.password === data.password
    );
    localStorage.setItem(TOKEN, data.email);
    if (IsMatchUser) {
      toast.success("login successfully!");
      router.push(ADMIN_ROUTES.DASHBOARD.absolutePath);
    } else {
      toast.error("login failed");
      router.push(ADMIN_ROUTES.LOGIN.absolutePath);
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
              Sign In
            </Primarytext>
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary text-black"
                    placeholder="Enter your email"
                    {...register("email", { required: true })}
                  />
                  {errors?.email && (
                    <p className="text-[red] text-xs mt-1">
                      {errors?.email?.message}
                    </p>
                  )}
                </div>
                <div className="mb-4 relative">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Password
                  </label>
                  <div className="absolute right-4 top-[45px] cursor-pointer">
                    {!view ? (
                      <BsEye
                        onClick={() => setView(true)}
                        color="#555555"
                        size={18}
                      />
                    ) : (
                      <BsEyeSlash
                        onClick={() => setView(false)}
                        color="#555555"
                        size={18}
                      />
                    )}
                  </div>
                  <input
                    type={!view ? "password" : "text"}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-primary text-black"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                  />
                  {errors?.password && (
                    <p className="text-[red] text-xs mt-1">
                      {errors?.password?.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-black bg-red-200 font-semibold py-3 px-5 rounded focus:outline-none focus:shadow-outline "
                >
                  Sign In
                </button>
              </form>
            </FormProvider>
          </div>
        </div>
      </section>
    </main>
  );
};
