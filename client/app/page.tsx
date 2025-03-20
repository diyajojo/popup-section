"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("html");

  return (
    <div className="flex justify-center items-center h-screen  ">
      <Dialog>
        <DialogTrigger asChild>
          <Button className="font-sans">EXPORT CODE</Button>
        </DialogTrigger>
        <DialogContent className="font-kumbh-sans rounded-xl border-2 border-[#1f1f1f] ">
          <DialogHeader>
            <DialogTitle className="text-xl tracking-wide mb-0.5 font-kumbh-sans font-semibold text-white">
              Code Export
            </DialogTitle>
            <p className="text-md font-kumbh-sans font-light text-[#D1D1D1]">
              Manage how you download your website's code.
            </p>
          </DialogHeader>
          <Tabs
            defaultValue="html"
            className="mt-4 bg-black/40 rounded-xl p-2"
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList className="grid  w-full grid-cols-2 bg-white/10 p-0.5 rounded-lg">
              <TabsTrigger
                value="html"
                className="rounded-md font-kumbh-sans cursor-pointer font-normal tracking-wide px-3 py-2 text-white data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white"
              >
                HTML & CSS
              </TabsTrigger>
              <TabsTrigger
                value="nextjs"
                className="rounded-md font-kumbh-sans cursor-pointer font-normal tracking-wide px-3 py-1.5 text-white data-[state=active]:bg-[#1A1A1A] data-[state=active]:text-white"
              >
                Next.JS
              </TabsTrigger>
            </TabsList>
            <TabsContent value="html" className="mt-4 px-3 pb-4 space-y-4">
              <div className="flex items-center justify-between ">
                <div className="flex items-center  space-x-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.139343 0L1.74416 17.9997L8.94631 20L16.168 17.998L17.7761 0H0.139343ZM14.2816 5.88867H5.83433L6.03615 8.14941H14.0814L13.4759 14.9268L8.94794 16.1816L4.42483 14.9268L4.11558 11.4583H6.33238L6.49025 13.221L8.94956 13.8835L8.95445 13.8818L11.4138 13.2178L11.6693 10.3548H4.01792L3.42385 3.67839H14.4818L14.2816 5.88867Z"
                      fill="white"
                      fillOpacity="0.8"
                    />
                  </svg>
                  <div className="space-y-1">
                    <h4 className="text-sm font-light leading-none text-[#FBFBFB]">
                      Export as HTML & CSS
                    </h4>
                  </div>
                </div>
                <span className="text-sm font-kumbh-sans font-light tracking-wide  text-white bg-white/10 px-4 py-1 rounded-full">
                  Zipped
                </span>
              </div>
              <div className="space-y-4 pl-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="assets-html" defaultChecked />
                  <label
                    htmlFor="assets-html"
                    className="text-sm font-normal tracking-wide text-[#AFAFAF]"
                  >
                    Include assets (images, styles, fonts, etc.)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="custom-code-html" defaultChecked />
                  <label
                    htmlFor="custom-code-html"
                    className="text-sm font-normal tracking-wide text-[#AFAFAF]"
                  >
                    Include custom code
                  </label>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="nextjs" className="mt-4   px-3 pb-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.29752 7.5C3.10002 8.06667 1.66669 9.0375 1.66669 10.1458C1.66669 11.9017 5.33752 13.3333 9.87502 13.3333C10.4917 13.3333 10.925 13.3008 11.5 13.2525"
                      stroke="#D1D1D1"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.19751 13.2499C7.85335 12.7533 7.52585 12.3058 7.21418 11.7499C4.92168 7.66661 4.30751 3.60827 5.85585 2.68911C6.81418 2.10827 8.39501 2.89994 10.0008 4.56744"
                      stroke="#D1D1D1"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.35752 12.8225C4.77252 15.0625 4.89085 16.7525 5.82418 17.3183C7.31002 18.2183 10.3134 15.6867 12.5267 11.6483C12.8267 11.09 13.0959 10.5408 13.3334 10"
                      stroke="#D1D1D1"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 15.4333C11.6067 17.1 13.1808 17.8917 14.1483 17.3108C15.69 16.3925 15.0825 12.3342 12.7875 8.25C12.4675 7.68583 12.14 7.24667 11.8042 6.75"
                      stroke="#D1D1D1"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.7167 12.5C16.8933 11.9275 18.3333 10.9583 18.3333 9.85329C18.3333 8.09496 14.66 6.66663 10.1292 6.66663C9.50667 6.66663 9.07417 6.69079 8.5 6.73913"
                      stroke="#D1D1D1"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.66669 10C6.90419 9.45004 7.17252 8.91004 7.47335 8.35171C9.67919 4.31504 12.6842 1.77671 14.1784 2.68421C15.1034 3.25004 15.23 4.93921 14.645 7.17838"
                      stroke="#D1D1D1"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.2166 10.0125H10.2083C10.2 10.1209 10.1083 10.2125 9.99165 10.2125C9.87581 10.2068 9.78449 10.1118 9.78331 9.99587C9.78331 9.87921 9.87498 9.78754 9.98331 9.78754H9.97498C10.0833 9.77921 10.1833 9.87921 10.1833 9.98754"
                      stroke="#D1D1D1"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="space-y-1">
                    <h4 className="text-sm font-light leading-none text-[#FBFBFB]">
                      Export as Next.JS Project
                    </h4>
                  </div>
                </div>
                <span className="text-sm font-kumbh-sans font-light tracking-wide text-white bg-white/10 px-4 py-1 rounded-full">
                  Zipped
                </span>{" "}
              </div>
              <div className="space-y-4 pl-1 ">
                <div className="flex items-center space-x-2">
                  <Checkbox id="app-dir" defaultChecked />
                  <label
                    htmlFor="app-dir"
                    className="text-sm font-normal tracking-wide text-[#AFAFAF]"
                  >
                    Use 'app' directory (NextJS v13+)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="assets" defaultChecked />
                  <label
                    htmlFor="assets"
                    className="text-sm font-normal tracking-wide text-[#AFAFAF]"
                  >
                    Include assets locally (images, styles, fonts, etc.)
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="custom-code" defaultChecked />
                  <label
                    htmlFor="custom-code"
                    className="text-sm font-normal tracking-wide text-[#AFAFAF]"
                  >
                    Include custom code
                  </label>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          <div className="mt-4 flex justify-center items-center w-full">
            <Button className="font-kumbh-sans font-normal tracking-wide">
              {activeTab === "html"
                ? "Download HTML CSS Project"
                : "Download Next JS Project"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}