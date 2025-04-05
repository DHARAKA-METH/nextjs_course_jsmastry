/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const RightSideBar = () => {
  const hotQuestions = [
    { _id: "1", title: "How to use React?" },
    { _id: "2", title: "How to use Next.js?" },
    { _id: "3", title: "How to use Tailwind CSS?" },
    { _id: "4", title: "How to use TypeScript?" },
    { _id: "5", title: "How to use Node.js?" },
  ];

  const PopularTags = [
    { _id: "1", name: "react", questions: 10 },
    { _id: "2", name: "nextjs", questions: 20 },
    { _id: "3", name: "tailwindcss", questions: 30 },
    { _id: "4", name: "typescript", questions: 40 },
    { _id: "5", name: "nodejs", questions: 50 },
  ];

  return (
    <section className="pt-36 right-0 top-0 flex h-screen w-[350px] flex-col gap-6 border-1 p-6 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevorn"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags </h3>
        <div className="mt-7 flex flex-col gap-4">
          {PopularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideBar;
