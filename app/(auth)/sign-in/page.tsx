"use client";
import AuthForm from "@/components/form/AuthForm";
import { signInWithCredentials } from "@/lib/actions/auth.action";
import { SignInSchema } from "@/lib/validation";
import React from "react";

const SignIn = () => {
  return <AuthForm
  formType ="SIGN_IN"
  schema={SignInSchema}
  defaltValues={{email: "", password: ""}}
  onSubmit={signInWithCredentials}
  />;
};

export default SignIn;
