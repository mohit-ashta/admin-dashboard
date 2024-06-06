"use client";
import "./globals.css";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "sonner";

interface ProviderProps {
  children: ReactNode;
}

export default function RootLayout({ children }: ProviderProps) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <section className="h-screen">{children}</section>
        </Provider>
        <Toaster position="top-center" invert={true} duration={3000} />
      </body>
    </html>
  );
}
