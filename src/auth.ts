import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "@/lib";
if(!process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET_KEY){
    throw new Error("Missing guthub client or client secret")
}
export const {handlers:{GET,POST,},auth,signIn,signOut}= NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET_KEY,
        })
    ],callbacks:{
        async session({user,session}){
            if(user && session){
                session.user.id=user.id
            }
            return session
        }
       
    }
});
