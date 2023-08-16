import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InstagramIcon, SendIcon } from "lucide-react";
import AsideBar from "@/components/AsideBar";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/");
  return (
    <div className=" bg-slate-800 w-full">
      <h1>HI</h1>
    </div>
  );
};

export default Page;
