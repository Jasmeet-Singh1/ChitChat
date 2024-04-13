import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      clientId: process.env.GOOGLE_CLIENT_ID!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
} satisfies NextAuthOptions;
