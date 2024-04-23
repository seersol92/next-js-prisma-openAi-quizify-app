import { DefaultSession, NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import {prisma} from '@/lib/db';
import GoogleProvider from 'next-auth/providers/google'

declare module 'next-auth/jwt' {
    interface JWT {
        id: string
    }
}

declare module 'next-auth' {
    interface Session extends DefaultSession {
        user: {
            id: string
        } & DefaultSession['user']
    }
}

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  session:{
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    jwt: async({token}) => {
        const db_user = await prisma.user.findFirst({
            where: {
                email: token?.email
            }
        })
        if(db_user)
            token.id = db_user.id
        return token;
    },
    session: async({session, token}) => {
        if (token){
            session.user.id = token.id
            session.user.name = token.name
            session.user.email = token.email
            session.user.image = token.picture
        }
        return session;
    },

  },  
}

