import { SignUp } from "@clerk/nextjs";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "intelligent -sign-Up",
};

export default function SignUpPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignUp />
    </div>
  );
}
