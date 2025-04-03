"use client";
import AuthForm from "@/components/form/AuthForm";
import { SignUpSchema } from "@/lib/validation";
import React from "react";

const SignUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaltValues={{ email: "", password: "",name:"",username:"" }}
      onSubmit={(data) => Promise.resolve({ success: true })}
    />
  );
};

export default SignUp;
