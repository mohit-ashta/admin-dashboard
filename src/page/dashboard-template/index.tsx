"use client";
import Card from "@/components/templates/card";
import { cardDataProps } from "@/constants/types";
import { useGetProductsQuery } from "@/redux/productSlice/productSlice";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { useSelector } from "react-redux";
const DashboardTemplate = () => {
  const { data } = useGetProductsQuery("getCard");

  const productCount = useSelector(
    (state: any) => state.productApi?.queries['getProducts("getCard")']?.data
  );

  return (
    <section>
      <div className="pt-5 pb-24 2xl:pb-44 bg-blueGray-100">
        <div className="container px-4 mx-auto">
          <div className="pb-9 text-center border-b border-black border-opacity-5">
            <div className="relative">
              <h2 className="mb-5 md:mb-0 text-9xl xl:text-2xl leading-normal font-heading font-medium text-center">
                Trending
              </h2>
              <span className="md:absolute md:right-0 md:bottom-3 text-sm text-gray-400 font-medium">
                {productCount?.length} products found
              </span>
            </div>
          </div>
          <div className="flex flex-wrap py-1 mb-4 xl:mb-5 border-b border-black border-opacity-10">
            <div className="py-2 sm:px-3 w-full sm:w-1/3 lg:w-1/5">
              <Link
                className="flex items-center justify-center font-heading font-medium border border-gray-200  rounded-4xl"
                href="#"
              >
                <span>Product</span>
                <RiArrowDownSLine />
              </Link>
            </div>
            <div className="py-2 sm:px-3 w-full sm:w-1/3 lg:w-1/5">
              <Link
                className="flex items-center justify-center font-heading font-medium border border-gray-200  rounded-4xl"
                href="#"
              >
                <span>Cards</span>
                <RiArrowDownSLine />
              </Link>
            </div>
            <div className="py-2 sm:px-3 w-full sm:w-1/3 lg:w-1/5">
              <Link
                className="flex items-center justify-center font-heading font-medium border border-gray-200  rounded-4xl"
                href="#"
              >
                <span>Orders</span>
                <RiArrowDownSLine />
              </Link>
            </div>
          </div>
          <div className="sm:flex sm:flex-wrap  justify-center pt-5">
            <div className="order-2 sm:pl-7 mb-10 sm:mb-0 sm:w-1/2 lg:w-4/12 xl:w-3/12">
              Sidebar
            </div>
            <div className="order-1 w-full sm:w-1/2 lg:w-8/12 xl:w-9/12 sm:pr-7">
              <div className="flex flex-wrap -mx-2">
                {data?.map((item: cardDataProps, id: number) => {
                  return (
                    <Card
                      key={id}
                      brand=""
                      currency={item.currency}
                      description={item.description}
                      image={item.image}
                      price={item.price}
                      title={item.title}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="sm:mx-auto sm:w-96">
            <button className="block py-5 px-10 w-full text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-indigo-500  hover:bg-indigo-400 focus:ring-2 focus:ring-red-900 focus:ring-opacity-50 rounded-xl">
              More products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardTemplate;
