import NextAuth from "next-auth";
import GITHUB from "next-auth/providers/github";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GITHUB],
});
