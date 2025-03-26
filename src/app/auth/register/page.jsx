"use client"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Page = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    toast.success("login success");
  };

  return (
    <div className="flex h-[calc(100vh-80px)] justify-center items-center">
      <div className="">
        {/*register page header part */}
        <Card className="w-[350px]">
          <CardHeader>
            <div className="flex justify-center gap-2 items-center flex-col">
              <Image
                src="/asset/msab_logo_b.png"
                width={85}
                height={85}
                alt={"msab logo"}
              />
              <CardTitle>নতুন অ্যাকাউন্ট তৈরি করুন</CardTitle>
            </div>
          </CardHeader>
          {/* register page content  */}
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="fullName">সম্পূর্ণ নাম</Label>
                  <Input id="fullName"
                  {...register("name")}
                  placeholder="আপনার সম্পূর্ণ নাম লিখুন" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="emailPhone">ইমেইল বা ফোন নম্বর</Label>
                  <Input
                    id="emailPhone"
                    {...register("emailPhone")}
                    placeholder="আপনার ইমেইল বা ফোন নম্বর লিখুন"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="password">পাসওয়ার্ড</Label>
                  <Input
                    id="password"
                    type="password"
                    {...register("password")}
                    placeholder="একটি শক্তিশালী পাসওয়ার্ড দিন"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="confirmPassword">
                    পাসওয়ার্ড নিশ্চিত করুন
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    {...register("confirmPassword")}
                    placeholder="পাসওয়ার্ডটি পুনরায় লিখুন"
                  />
                </div>
              </div>
              <div className="flex justify-between w-full mt-5">
                <Link href={"/"}>
                  <Button variant="outline" type="submit" className="text-red-700">
                    বাতিল করুন
                  </Button>
                </Link>
                <Button type="submit" className="bg-green-700 hover:bg-green-500">
                  সাইন আপ
                </Button>
              </div>
            </form>
          </CardContent>
          {/* register page card footer part */}
          <CardFooter className="flex flex-col items-center gap-2">
            <p className="text-sm mt-2 w-full">
              ইতিমধ্যে একটি অ্যাকাউন্ট আছে?
              <Link href="/auth/login" className="text-blue-600 hover:underline"> লগইন করুন</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Page;
