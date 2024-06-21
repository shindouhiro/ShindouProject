// pages/api/auth/[...nextauth].ts
import NextAuth, { NextAuthOptions, User } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { JWT } from 'next-auth/jwt';
import { NextApiRequest, NextApiResponse } from 'next';

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
debugger

        const res = await fetch('http://localhost:3000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        });
        const user = await res.json();
        

        if (res.ok && user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, options);
