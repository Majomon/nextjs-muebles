import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      email: string;
      image?: string;
      name: string;
      rol: string[];
      isActive: string;
    } & DefaultSession["user"];
  }
}
