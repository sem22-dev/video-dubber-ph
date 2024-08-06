"use client"
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <main className="flex w-screen px-4 justify-center py-12">
      <div>
        <Header />
        <div className="flex  flex-col lg:flex-row justify-between gap-12 py-12 lg:items-end">
          <div className=" lg:w-[65%] ">
            <Image 
              src={'https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2'} 
              width={72}
              height={72} 
              alt="img"
            />
            <h1 className="flex gap-1 text-2xl  w-full font-bold my-4 items-center">
              VideoDubber - Fast Video translator
              <ArrowDown />
            </h1>
            <h1 className="text-xl text-gray-600 font-light">
              Translate videos in your own voice, globalize in a click!
            </h1>
          </div>
          <div className="relative flex gap-4">
            <Link 
              href={'https://videodubber.ai/translate-video/?ref=producthunt'} 
              target="_blank"
              className="relative border hover:border-orange-500 transition p-4 rounded-sm flex gap-1 items-center"
              onMouseEnter={() => setShowPopup(true)}
              onMouseLeave={() => setShowPopup(false)}
            >
              Visit
              <ArrowDown />
              {/* Popup Menu */}
              {showPopup && (
                <div className="absolute -left-10 top-full mt-1 w-[230px] bg-white shadow-lg rounded-md">
                  <ul className="space-y-1 text-sm">
                    <li><Link href="https://videodubber.Linki/translate-video/?ref=producthunt" className=" p-4 flex gap-4 text-gray-700 hover:bg-gray-100 rounded-md">Website <span className="text-gray-500">videodubber.ai</span></Link></li>
                    <li><Link href="https://videodubber.ai/translate-video/?ref=producthunt" className="p-4 flex gap-4 text-gray-700 hover:bg-gray-100 rounded-md">Learn more <span className="text-gray-500">videodubber.ai</span></Link></li>
                  </ul>
                </div>
              )}
            </Link>
            <button className="flex px-6 w-full lg:w-[220px] justify-center gap-4 items-center rounded-sm border-2 border-orange-500">
              <Upvoted />
              <h1> UPVOTED <span>135</span></h1>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function ArrowDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-[#cfcfcf] cursor-pointer"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function Upvoted() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="#FF5A5F"
      stroke="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-triangle"
    >
      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </svg>
  );
}
