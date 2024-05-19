import NextAuth, { NextAuthConfig } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
 
const prisma = new PrismaClient()

const authOptions :NextAuthConfig  = {
  adapter: PrismaAdapter(prisma),
      providers: [
        GoogleProvider({
          clientId: process.env.AUTH_GOOGLE_ID as string,
          clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
        }),
      ],
      session:{
          strategy:'jwt'
      },
  }

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)

