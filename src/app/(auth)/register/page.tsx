"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Check, Truck, Shield, User, LoaderCircle } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerAction } from "./register.action";
import { toast, Toaster } from "sonner";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";

export default function Register() { 
  const RegisterSchema = z
    .object({
      name: z
        .string()
        .nonempty("Name is required")
        .min(3, "Name must be at least 3 characters")
        .max(50, "Name must be at most 50 characters"),
      email: z
        .string()
        .nonempty("Email is required")
        .email("Please enter a valid email"),
      password: z
        .string()
        .nonempty("Password is required")
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          "Password must contain uppercase, lowercase, number and special character",
        ),
      rePassword: z.string().nonempty("Please confirm your password"),
      phone: z
        .string()
        .nonempty("Phone number is required")
        .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
    })
    .refine((data) => data.password === data.rePassword, {
      message: "Passwords do not match",
      path: ["rePassword"],
    });

  type RegisterValues = z.infer<typeof RegisterSchema>;

  const { handleSubmit, control } = useForm<RegisterValues>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  const [Loding, setLoding] = useState(false);

  async function submitRegisterForm(values: RegisterValues) {
    console.log(values);
    setLoding(true);
    try {
      const registerBoolen = await registerAction(values);
      if (registerBoolen === true) {
        toast.success("Account created successfully! Please log in.", {
          action: {
            label: "Go Login Now",

            onClick: () => {
              window.location.href = "/login";
            },
          },
        });
        setTimeout(() => {
          redirect("/login");
        }, 3000);
      } else {
        toast.error(registerBoolen, {});
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoding(false);
    }
  }

  const inputStyle =
    "border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:border-green-500";
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 container mx-auto">
      <div className="flex flex-col px-10 py-10 ">
        {/* content */}
        <div className="w-full ">
          <h2 className="text-4xl font-bold mb-4  text-left">
            Welcome to <span className="text-green-500">StoreHub</span>
          </h2>

          <p className="text-gray-600 mb-8 text-lg text-left">
            Join thousands of happy customers who enjoy{" "}
            <span className="font-semibold text-green-500">StoreHub</span>{" "}
            groceries delivered right to their doorstep.
          </p>

          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full shrink-0">
                <Check className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Premium Quality</h4>
                <p className="text-gray-600">
                  Premium quality products sourced from trusted suppliers.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full shrink-0">
                <Truck className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Fast Delivery</h4>
                <p className="text-gray-600">
                  Get your groceries delivered quickly and reliably.
                </p>
              </div>
            </li>

            <li className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-full shrink-0">
                <Shield className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Secure Shopping</h4>
                <p className="text-gray-600">
                  Your data and payments are completely secure.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* review card */}
        <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-md mt-8">
          <Image
            src="/darsh.jpeg"
            alt="StoreHub"
            width={80}
            height={80}
            className="rounded-full"
          />

          <div>
            <h3 className="font-bold text-lg">Mostafa Ahmed</h3>
            <p className="text-yellow-400 text-lg">★★★★★</p>

            <p className="text-gray-600 mt-2 text-sm leading-relaxed">
              StoreHub has transformed my shopping experience. The quality of
              the products is outstanding, and the delivery is always on time.
            </p>
          </div>
        </div>
      </div>

      {/* form */}
      <div className="flex items-center justify-center bg-white px-6 my-5 md:my-16">
        <form
          className="w-full max-w-lg bg-white rounded-2xl shadow-xl px-3 py-8 border border-gray-200"
          onSubmit={handleSubmit(submitRegisterForm)}
        >
          <FieldGroup>
            <div className="text-center mb-6 mt-8">
              <h2 className="text-2xl font-bold">Create your Account</h2>
              <p className="text-gray-600">start your storeHub journey today</p>
            </div>

            <div className="register-options flex gap-2 my-1 [&>*]:grow">
              <Button
                type="button"
                variant="outline"
                className="flex items-center justify-center"
              >
                <FcGoogle className="me-2 text-xl" />
                <span>Google</span>
              </Button>

              <Button
                type="button"
                variant="outline"
                className="flex items-center justify-center"
              >
                <FaFacebook className="me-2 text-xl text-blue-600" />
                <span>Facebook</span>
              </Button>
            </div>

            <div
              className="relative w-full h-[1px] bg-gray-300/30 my-0.0625remflex items-center
                  before:content-['or']
            before:absolute
    before:top-1/2
    before:left-1/2
    before:-translate-x-1/2
    before:-translate-y-1/2
    before:bg-white
    before:px-4
    before:text-sm
    before:text-gray-500
  "
              aria-hidden="true"
            >
              <span className="sr-only">or</span>
            </div>
            {/* name */}
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Field>
                    <FieldLabel>Name</FieldLabel>
                    <Input
                      {...field}
                      className={inputStyle}
                      type="text"
                      placeholder="Enter your name"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />

            {/* email */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Field>
                    <FieldLabel>Email</FieldLabel>
                    <Input
                      {...field}
                      className={inputStyle}
                      type="email"
                      placeholder="Enter your email"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />
            {/* password */}
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Field>
                    <FieldLabel>Password</FieldLabel>
                    <Input
                      {...field}
                      className={inputStyle}
                      type="password"
                      placeholder="Enter your password"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />
            {/* confirm password */}
            <Controller
              name="rePassword"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Field>
                    <FieldLabel>Confirm Password</FieldLabel>
                    <Input
                      {...field}
                      className={inputStyle}
                      type="password"
                      placeholder="Confirm your password"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />

            {/* phone */}
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <Field>
                    <FieldLabel>phone</FieldLabel>
                    <Input
                      {...field}
                      className={inputStyle}
                      type="tel"
                      placeholder="Enter your phone number (egypt)"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                );
              }}
            />

            <Button
              disabled={Loding}
              className="w-full mt-4 bg-green-500 hover:bg-green-600 cursor-pointer text-white"
              type="submit"
            >
              {Loding && <LoaderCircle className="w-5 h-5 animate-spin mr-2" />}{" "}
              Create Account
              <User className="w-5 h-5 mr-2" />
            </Button>
          </FieldGroup>

          <div className="mt-4 text-sm text-center">
            <p>
              Already have an account?{" "}
              <Link className="text-green-500 font-medium" href="/login">
                Sign in
              </Link>
            </p>
          </div>

          <Toaster duration={3000} position="top-right" richColors={true} />
        </form>
      </div>
    </div>
  );
}
