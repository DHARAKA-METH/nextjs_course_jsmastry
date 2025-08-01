import Metric from "@/components/ui/Metric";
import UserAvatar from "@/components/UserAvatar";
import ROUTES from "@/constants/routes";
import { formatNumber, getTimeStamp } from "@/lib/utils";
import { RouteParams, Tag } from "@/types/global";
import Link from "next/link";
import React from "react";
import TagCard from "@/components/cards/TagCard";
import { Preview } from "@/components/editor/Preview";
import { getQuestion, incrementViews } from "@/lib/actions/question.action";
import { redirect } from "next/navigation";
import { after } from "next/server";
import AnswerForm from "@/components/form/AnswerForm";
import AllAnswer from "@/components/answers/AllAnswer";
import { getAnswers } from "@/lib/actions/answer.action";
import Votes from "@/components/votes/Votes";


const QuestionDetails = async ({ params }: RouteParams) => {
  const { id } = await params;
  const { success, data: question } = await getQuestion({ questionId: id });

  after(async () => {
    await incrementViews({ questionId: id });
  });

  if (!success || !question) return redirect("404");

  const {success:areAnswerLoaded ,data:answerResult, error:answersError } = await getAnswers({
    questionId: id,
    page: 1,
    pageSize: 10,
    filter: "latest",
  })
  const { author, createdAt, answers, views, tags, content, title } = question;
  return (
    <>
      <div className="flex-start w-full flex-col">
        <div className="flex w-full flex-col-reverse justify-between">
          <div className="flex items-center justify-start gap-1">
            <UserAvatar
              id={author._id}
              name={author.name}
              className="size-[22px]"
              fallbackClassName="text-[22px]"
            />
            <Link href={ROUTES.PROFILE(author._id)}>
              <p className="paragraph-semibold text-dark300_light700">
                {author.name}
              </p>
            </Link>
          </div>
          <div className="flex justify-end">
          <Votes
              upvotes={question.upvotes}
              hasupVoted={true}
              downvotes={question.downvotes}
              hasdownVoted={false}
            />
          </div>
        </div>
        <h2 className="h2-semibold text-dark200_light900 mt-3.5 w-full">
          {title}
        </h2>
      </div>
      <div className="mb-8 mt-5 flex flex-wrap gap-4">
        <Metric
          imgUrl="/icons/clock.svg"
          alt="Clock Icon"
          value={`asked ${getTimeStamp(new Date(createdAt))}`}
          title=""
          textStyles="small-regular text-dark400_light700"
        />
        <Metric
          imgUrl="/icons/message.svg"
          alt="message icon"
          value={answers}
          title=""
          textStyles="small-regular text-dark400_light700"
        />
        <Metric
          imgUrl="/icons/eye.svg"
          alt="eye icon"
          value={formatNumber(views)}
          title=""
          textStyles="small-regular text-dark400_light700"
        />
      </div>
      <Preview content={content} />
      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag: Tag) => (
          <TagCard key={tag._id} _id={tag._id} name={tag.name} compact />
        ))}
      </div>
      <section className="my-5">
        <AllAnswer
        data ={answerResult?.answers}
        success={areAnswerLoaded}
        error={answersError}
        totalAnswers={answerResult?.totalAnswers || 0}
        
        />
      </section>

      <section className="my-5">
        <AnswerForm questionId={question._id} questionTitle={question.title} questionContent ={question.content} />
      </section>
    </>
  );
};

export default QuestionDetails;
