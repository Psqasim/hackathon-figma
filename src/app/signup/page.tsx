// signup/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center text-blue-600 mb-6">Create an Account</h1>
        <SignUp path="/signup" routing="path" signInUrl="/signin">
          
        </SignUp>
      </div>
    </div>
  );
}
