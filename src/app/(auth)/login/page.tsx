"use client";

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Shield, Truck, Timer, Users, Lock, Star, User,  LoaderCircle } from "lucide-react";
import  { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image"; 
import CreateAccount from "@/components/CreateAccount";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { signIn } from "next-auth/react";
import { toast } from "sonner";




const LoginSchema = z.object({
  email: z
    .string()
    .nonempty("Email is required")
    .email("Please enter a valid email"),

  password: z
    .string()
    .nonempty("Password is required")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
      "Password must contain uppercase, lowercase, number and special character",
    ),
});

type LoginValues = z.infer<typeof LoginSchema>;


export default function Login() {
  
  const [Loding, setLoding] = useState(false);

  const { handleSubmit, control } = useForm<LoginValues>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

async function submitLoginForm(values: LoginValues) {
  setLoding(true)
  try {

    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/",
    });
  
    console.log(result);
   if (result?.error) {
        toast.error("Invalid email or password");
        return;
      }
       toast.success("Login successful");
  
    
    console.log("Login Success");
  } catch (error) {
    console.error("Login Error:", error);
    toast.error("An error occurred during login");
  } finally {
    setLoding(false)
  }
}

  const inputStyle =
    "border border-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:border-green-500";

  const inputStyle2 = "bg-gray-200 ";

  return (
    <>
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 container mx-auto">
        <div className="flex flex-col py-6">
          <div className="w-[80%] mx-auto">
            <Image
              src="/vegatables.png"
              alt="Apple"
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md mt-2">
            <div>
              <h2 className="font-bold text-center text-lg">
                FreshCart - Your One-Stop Shop for Fresh Products
              </h2>

              <p className="text-gray-500 text-center text-lg">
                Join thousands of happy customers who trust FreshCart for their
                daily grocery needs
              </p>

              <div className="flex items-center w-full gap-2 bg-white py-4 pt-5">
                <div className="item-1 flex items-center gap-2 flex-1">
                  <Truck className="text-green-600 w-6 h-6" />
                  Free Delivery
                </div>

                <div className="item-2 flex items-center gap-2 flex-1">
                  <Shield className="text-green-600 w-6 h-6" />
                  Secure Payment
                </div>

                <div className="item-3 flex items-center gap-2 flex-1">
                  <Timer className="text-green-600 w-6 h-6" />
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT (FORM) ================= */}
        <div className="h-full flex items-center justify-center bg-white pt-0 px-4">
          <form
            className="w-full bg-white rounded-2xl shadow-xl py-10 px-6 border border-gray-200 flex flex-col mb-5"
            onSubmit={handleSubmit(submitLoginForm)}
          >
            {/* top content */}
            <div>
              <div className="text-center mb-6">
                <h2 className="text-4xl mb-3 font-bold">
                  <span className="text-green-500">Store</span>Hub
                </h2>

                <h2 className="text-3xl font-bold">Welcome Back 😎</h2>

                <p className="text-gray-600 mt-3">
                  Sign in to continue your{" "}
                  <span className="text-green-500 text-1xl">StoreHub</span>{" "}
                  shopping experience
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <button
                  type="button"
                  className="  w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200   rounded-xl  hover:border-primary-300  hover:bg-primary-50 transition-all duration-200">
                  <FcGoogle className="text-lg" />
                  <span className="font-medium text-gray-700">
                    Continue with Google
                  </span>
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200">
                  <FaFacebook className="text-lg text-blue-600" />
                  <span className="font-medium text-gray-700">
                    Continue with Facebook
                  </span>
                </button>
              </div>
              <div
                className="relative w-full h-[1px] bg-gray-300/30 flex items-center my-4 before:content-['OR']  before:absolute before:top-1/2   before:left-1/2    before:-translate-x-1/2   before:-translate-y-1/2   before:bg-white before:px-4  before:text-sm  before:text-gray-500 " aria-hidden="true">
                {/* <span className="sr-only">OR CONTINUE WITH EMAIL</span> */}
              </div>

              <FieldGroup>
                {/* email */}
                <Controller
                  name="email"
                  control={control}
                  render={({ field, fieldState }) => {
                    return (
                      <Field>
                        <FieldLabel>Email Address</FieldLabel>

                        <Input
                          {...field}
                          className={inputStyle + " " + inputStyle2}
                          type="email"
                          placeholder="Enter your email"
                          autoComplete="email"
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
                          className={inputStyle + " " + inputStyle2}
                          type="password"
                          placeholder="Enter your password"
                          autoComplete="current-password"
                        />

                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    );
                  }}
                />

                <Button
                  className="w-full mt-4 bg-green-500 cursor-pointer hover:bg-green-600 text-white"
                  type="submit"
                  disabled={Loding}
                >
                  {Loding && <LoaderCircle className="w-5 h-5 animate-spin mr-2" />}{" "}
              
              <User className="w-5 h-5 mr-2" />
                  Sign in
                </Button>
              </FieldGroup>
            </div>

            {/* bottom link */}
            <div className="text-sm text-center mt-4 w-full">
              <p>
                New To StoreHub?
                <CreateAccount href="/register">
                  Create an account
                </CreateAccount>
              </p>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Lock className="w-4 h-4" />
                SSL Secured
              </div>

              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                50K+ Users
              </div>

              <div className="flex items-center gap-1">
                <Star className="w-4 h-4" />
                4.9 Rating
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
