'use client'
import { ClerkProvider } from "@clerk/clerk-react";



interface Props {
  children: React.ReactNode;
}

const ClerkProviderWrapper: React.FC<Props> = ({ children }) => {
  
 // Access the publishable key from the environment variable
 const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

 if (!publishableKey) {
   throw new Error("Clerk publishable key is not defined in .env.local");
 }


 
  return (
    <ClerkProvider 
      publishableKey={publishableKey} 
    
    >
      {children}
    </ClerkProvider>
  );
};

export default ClerkProviderWrapper;
