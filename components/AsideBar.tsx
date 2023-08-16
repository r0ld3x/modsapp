"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { SendIcon } from "lucide-react";

const AsideBar = () => {
  const [isclient, setIsclient] = React.useState(false);
  React.useEffect(() => {
    setIsclient(true);
  }, []);
  return (
    isclient && (
      <aside className="w-56 bg-slate-600 rounded-md h-screen">
        <div className="flex flex-col justify-between items-center h-screen">
          <div className="flex flex-col justify-around items-center h-1/2 w-full">
            <h1 className="text-xl font-sans font-bold py-5">Admin Page</h1>
            <div className="flex flex-col gap-4 font-bold items-center text-center justify-center w-full">
              <div className="w-full pl-2">
                <Button asChild className="pointer-events-none">
                  <Link
                    href="#"
                    className="font-bold text-emerald-400 bg-slate-800 w-full rounded-none rounded-l-md h-14 flex items-center justify-center disabled:opacity-50"
                  >
                    New Post
                  </Link>
                </Button>
              </div>
              <div className="w-full px-2">
                <Button
                  asChild
                  disabled={false}
                  className="disabled:pointer-events-none"
                >
                  <Link
                    href="#"
                    className="font-bold text-emerald-400 bg-slate-800 w-full rounded-none rounded-l-md h-14 flex items-center justify-center disabled:opacity-50"
                  >
                    New Post
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end pb-8 items-center text-center h-1/2 ">
            <Link
              href="#"
              className="flex text-center  gap-2 justify-center items-center bg-transparent hover:text-blue-500 transition px-5"
            >
              <SendIcon className="text-blue-500 " />
              <span className="text-xl font-bold text-center">Telegram</span>
            </Link>
          </div>
        </div>
      </aside>
    )
  );
};

export default AsideBar;
