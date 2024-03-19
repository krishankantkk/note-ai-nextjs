import Image from "next/image";
import logo from "@/app/asset/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default function Home() {
  const { userId } = auth();
  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-2 ">
      <div className="flex items-center gap-4">
        <Image src={logo} alt="smart Note" width={100} height={100} />
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl ">
          Smart Note
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent Note-taking app with AI integeration, built with OpenAi,
        Pinecone, Nextjs, Shadcn UI, Clerk, and more.
      </p>
      <Button size="lg" asChild>
        <Link href="/notes">Open</Link>
      </Button>
    </main>
  );
}
