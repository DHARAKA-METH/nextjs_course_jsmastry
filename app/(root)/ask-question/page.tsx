import { auth } from "@/auth";
import QuestionForm from "@/components/form/QuestionForm";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = async() => {
const session =await auth();
if(!session)return redirect("/sign-in");
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Ask a Question </h1>
      <div className="mt-9">
        <QuestionForm />
      </div>
    </>
  );
};

export default AskQuestion;
