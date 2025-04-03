"use client";
import AuthForm from "@/components/form/AuthForm";
import { SignInSchema } from "@/lib/validation";
import React from "react";

const SignIn = () => {
  return <AuthForm
  formType ="SIGN_IN"
  schema={SignInSchema}
  defaltValues={{email: "", password: ""}}
  onSubmit={(data) =>Promise.resolve({success:true})}
  />;
};

export default SignIn;
