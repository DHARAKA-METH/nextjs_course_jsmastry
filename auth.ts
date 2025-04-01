import NextAuth from "next-auth";
import GITHUB from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GITHUB, Google],
});
