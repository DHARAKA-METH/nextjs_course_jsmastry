import { auth } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import { HomeFilter } from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React,Can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: { _id: "1", name: "John Doe", image: "/images/profile-img.jpg" },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2024-04-08"),
  },
  {
    _id: "2",
    title: "How to get started with Node.js?",
    description:
      "I'm new to Node.js. Any resources or tips to help me get started?",
    tags: [
      { _id: "1", name: "Node.js" },
      { _id: "3", name: "JavaScript" },
    ],
    author: { _id: "2", name: "Jane Smith", image: "/images/profile-img.jpg" },
    upvotes: 15,
    answers: 8,
    views: 150,
    createdAt: new Date(),
  },

  {
    _id: "3",
    title: "What is the difference between React and Angular?",
    description:
      "Can someone explain the key differences between React and Angular?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "4", name: "Angular" },
    ],
    author: {
      _id: "3",
      name: "Alice Johnson",
      image: "/images/profile-img.jpg",
    },
    upvotes: 20,
    answers: 12,
    views: 200,
    createdAt: new Date(),
  },
  {
    _id: "4",
    title: "How to learn javascript?",
    description:
      "Can someone explain the key differences between React and Angular?",
    tags: [
      { _id: "1", name: "javascript" },
      { _id: "4", name: "Angular" },
    ],
    author: {
      _id: "3",
      name: "Alice Johnson",
      image: "/images/profile-img.jpg",
    },
    upvotes: 20,
    answers: 12,
    views: 200,
    createdAt: new Date(),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {


  const session = await auth();
  console.log("Session:", session);

  const { query = "", filter = "" } = await searchParams;
  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query?.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });
  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center  ">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] p-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search Questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
