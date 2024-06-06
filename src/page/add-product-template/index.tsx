"use client";
import { addProductSchema } from "@/constants/schema";
import { cardDataProps, cardProps } from "@/constants/types";
import { useAddProductMutation } from "@/redux/productSlice/productSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export const AddProductTemplate = () => {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedImageFiles, setSelectedImageFiles] = useState([]);

  const methods = useForm({ resolver: yupResolver(addProductSchema) });
  const [addProduct] = useAddProductMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = methods;
  const handleFileChange = (e: any) => {
    const files = e.target.files;
    setSelectedImageFiles(files);
    const newSelectedImages = [];

    for (let i = 0; i < files.length; i++) {
      newSelectedImages.push(URL.createObjectURL(files[i]));
    }
    setSelectedImages(newSelectedImages);
  };

  // console.log(selectedFiles, "selectedFiles");

  const handleProduct: SubmitHandler<cardProps> = (data) => {
    const dat1 = { ...data, image: selectedImages };
  };

  return (
    <section className="py-3 mt-10">
      <div className="container px-4 mx-auto">
        <div className="p-8 bg-gray-500 rounded-xl">
          <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
            <div className="w-full sm:w-auto px-4 mb-8 sm:mb-0">
              <h4 className="text-2xl font-bold tracking-wide text-white mb-1">
                Product Add
              </h4>
              <p className="text-sm text-gray-300">
                Add your Product details here
              </p>
            </div>
          </div>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(handleProduct)}>
              <div className="flex flex-wrap items-start -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
                <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                  <span className="block mt-5 text-sm font-medium text-gray-100">
                    Product details
                  </span>
                </div>
                <div className="w-full sm:w-2/3 px-4">
                  <div className="max-w-xl">
                    <div className="-mx-4 -mb-10">
                      <div className="w-full md:w-2/3 px-4 mb-10">
                        <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                            Product Name
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            {...register("title")}
                            type="text"
                          />
                          {errors?.title && (
                            <p className="text-[red] text-xs mt-1">
                              {errors?.title?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 px-4 mb-10">
                        <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                            Price
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            {...register("price")}
                            type="number"
                          />
                          {errors?.price && (
                            <p className="text-[red] text-xs mt-1">
                              {errors?.price?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 px-4 mb-10">
                        <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                            Brand
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            {...register("brand")}
                            type="text"
                          />
                          {errors?.brand && (
                            <p className="text-[red] text-xs mt-1">
                              {errors?.brand?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="w-full md:w-1/3 px-4 mb-10">
                        <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                            Currency
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            {...register("currency")}
                            type="text"
                          />
                          {errors?.currency && (
                            <p className="text-[red] text-xs mt-1">
                              {errors?.currency?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-gray-400 border-opacity-20">
                <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                  <span className="text-sm font-medium text-gray-100">
                    Image
                  </span>
                </div>
                <div className="w-full sm:w-2/3 px-4">
                  <div className="max-w-xl">
                    <input
                      className="block py-4 px-3 w-full text-sm text-gray-50 placeholder-gray-50 font-medium outline-none bg-transparent border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg"
                      onChange={handleFileChange}
                      accept="image/png,image/jpg"
                      multiple
                      type="file"
                      name="image"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-start -mx-4">
                <div className="w-full sm:w-1/3 px-4 mb-8 sm:mb-0">
                  <span className="block mt-5 text-sm font-medium text-gray-100">
                    Description
                  </span>
                </div>
                <div className="w-full sm:w-2/3 px-4">
                  <div className="max-w-xl">
                    <div className="flex flex-wrap -mx-4 -mb-10">
                      <div className="w-full px-4 mb-10">
                        <div className="relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg">
                          <span className="absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500">
                            Description
                          </span>
                          <input
                            className="block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold"
                            {...register("description")}
                            type="text"
                          />
                          {errors?.description && (
                            <p className="text-[red] text-xs mt-1">
                              {errors?.description?.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full  text-end mt-10">
                <div>
                  {/* <button className="inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-black bg-gray-200 hover:bg-gray-700 rounded-lg transition duration-200">
                    Cancel
                  </button> */}
                  <button
                    className="inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-blue-50 bg-indigo-500 hover:bindigo-400 rounded-lg transition duration-200"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  );
};
