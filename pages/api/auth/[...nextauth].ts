import NextAuth, { type NextAuthOptions, DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";

// 2. Session type extension
declare module "next-auth" {
  interface Session extends DefaultSession {
    user?: {
      id: string;
      role?: string;
    } & DefaultSession["user"];
  }
}


// Environment validation
function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error("Missing Google OAuth credentials");
  }

  return { clientId, clientSecret };
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      ...getGoogleCredentials(),
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline", 
          response_type: "code"
        }
      }
    })
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = {
        ...session.user,
        id: user.id,
        role: user.role
      };
      return session;
    },
    redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin'
  }
};

export default NextAuth(authOptions);