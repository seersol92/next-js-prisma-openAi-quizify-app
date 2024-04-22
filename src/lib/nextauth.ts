import { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {prisma} from '@/lib/db';

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session:{
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [],
  adapter: PrismaAdapter(prisma),
}

