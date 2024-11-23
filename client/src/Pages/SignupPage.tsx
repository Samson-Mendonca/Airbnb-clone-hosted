"use client";
import React, { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {

  const [name, setname] = useState('');
  const [email, setemail] = useState(' ');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(name.length> 10){
      alert('Name should be less than 10 characters');
    return;}
    if (password !== confirmpassword) {
      alert('Passwords do not match');
      return;
    }
    if(!email || !password || !name || !confirmpassword){
      alert('Please enter all the fields.');
      
    }else{
    try {
      await axios.post('/register',{
        name,
        email,
        password
      });
      alert('Registered successfully,Now you can login');
    } catch (error) {
      alert('Registration failed. Please try again');
    }
  }
  }
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-4">
      <h2 className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 text-center">
       Welcome to Airbnb
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2  dark:text-neutral-300 text-center">
        Login or Sign up
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name"> Name</Label>
            <Input id="name" placeholder="Tyler" type="text" value={name} onChange={(e) => setname(e.target.value)}/>
          </LabelInputContainer>
          
        
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" value={email} onChange={(e) => setemail(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" value={password} onChange={(e) => setpassword(e.target.value)}/>
        </LabelInputContainer>
        <LabelInputContainer className="mb-8">
          <Label htmlFor="confirmpassword">Confirm Your Password</Label>
          <Input
            id="confirmpassword"
            placeholder="••••••••"
            type="password"
            value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)}
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        
      </form>
      <div className="text-neutral-600 text-sm font-medium max-w-sm mt-2 dark:text-black text-center">
       Already have an account?<Link className=" underline text-indigo-400 ml-2 " to={'/login'}>Login</Link>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
