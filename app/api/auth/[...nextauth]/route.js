import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signIn",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();
      session.user.uuid = token.sub;
      return session;
    },
  },
  // pages: {
  //   signIn: "/auth/signin",
  // },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
// export default NextAuth(authOptions);
