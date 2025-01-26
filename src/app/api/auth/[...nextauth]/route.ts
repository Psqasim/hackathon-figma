import { findUser ,createUser } from "@/app/lib/user"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" },
        isSignUp: { label: "Is Sign Up", type: "boolean" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required")
          }

          // Handle sign up
          if (credentials.isSignUp === "true" && credentials.name) {
            const existingUser = findUser(credentials.email)
            if (existingUser) {
              throw new Error("User already exists")
            }

            const newUser = createUser(credentials.name, credentials.email, credentials.password)
            return {
              id: newUser.id,
              name: newUser.name,
              email: newUser.email,
            }
          }

          // Handle sign in
          const user = findUser(credentials.email)
          if (!user || user.password !== credentials.password) {
            throw new Error("Invalid email or password")
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          }
        } catch (error) {
          console.error("Auth error:", error)
          throw error
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.name = token.name as string
        session.user.email = token.email as string
      }
      return session
    },
  },
})

export { handler as GET, handler as POST }

