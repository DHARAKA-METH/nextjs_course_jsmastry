import { PaginatedSearchParams } from "./global";

export interface SignInWithOAuthParams {
  provider: "github" | "google";
  providerAccountId: string;
  user: {
    email: string;
    name: string;
    image: string;
    username: string;
  };
}

export interface AuthCredentials { 

  name: string;
  username: string;
  email: string;
  password: string;


}


interface GetTagQuestionsParams extends Omit<PaginatedSearchParams, "filter"> {
  tagId: string;
}

interface IncrementViewsParams{
  questionId:string
}