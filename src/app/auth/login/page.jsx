"use client";

import { useForm } from "react-hook-form";
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
import axios from "axios";
import toast from "react-hot-toast";  

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log("Submitting data:", formData);

    try {
      const response = await axios.post("http://localhost:3000/api/user", formData, {
        headers: { "Content-Type": "application/json" }, // Ensure JSON request
      });

      if (response.data.success) {
        toast.success("Login successful!");
      } else {
        toast.error(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-[350px] shadow-lg">
        {/* Login Page Header */}
        <CardHeader className="text-center">
          <Image
            src="/asset/msab_logo_b.png"
            width={85}
            height={85}
            alt="MSAB Logo"
          />
          <CardTitle>আপনার অ্যাকাউন্টে প্রবেশ করুন</CardTitle>
        </CardHeader>

        {/* Login Form */}
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">ইমেইল</Label>
              <Input
                id="email"
                {...register("email", { required: "ইমেইল আবশ্যক" })}
                placeholder="আপনার ইমেইল লিখুন"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">নাম</Label>
              <Input
                id="name"
                type="text"
                {...register("name", { required: "নাম আবশ্যক" })}
                placeholder="আপনার নাম লিখুন"
              />
              {errors.name && (
                <p className="text-red-600 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div className="flex justify-between">
              <Link href="/">
                <Button variant="outline" type="button" className="text-red-700">
                  বাতিল করুন
                </Button>
              </Link>
              <Button type="submit" className="bg-green-700 hover:bg-green-500">
                লগইন
              </Button>
            </div>
          </form>
        </CardContent>

        {/* Login Footer */}
        <CardFooter className="flex flex-col text-center">
          <p className="text-sm">
            আপনার কি অ্যাকাউন্ট নেই?
            <Link href="/auth/register" className="text-blue-600 hover:underline">
              {" "}নিবন্ধন করুন
            </Link>
          </p>
          <p className="text-sm">
            লগইন সংক্রান্ত সমস্যা হলে{" "}
            <Link href="/contact" className="text-blue-600 hover:underline">
              যোগাযোগ করুন
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
