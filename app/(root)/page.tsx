"use client"
import { SignedIn } from "@clerk/clerk-react";
import { SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import  { useRouter } from "next/navigation";
import React, { useEffect } from "react";


const Home = () => {
    const router = useRouter();
  return (
    <div>
        <p>Home</p>
    </div>
  );
};



export default Home;


