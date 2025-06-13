"use client";
import AuthForm from "@/components/form/AuthForm";
import { signUpWithCredentials } from "@/lib/actions/auth.action";
import { SignUpSchema } from "@/lib/validation";
import React from "react";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaltValues={{ email: "", password: "",name:"",username:"" }}
      onSubmit={signUpWithCredentials}
    />
  );
};

export default SignUp;
