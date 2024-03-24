"use client";
import logo from "@/app/asset/logo.png";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddNoteDialog from "@/components/AddNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggleButton";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/AIChatButton";
export default function NavBar() {
  const { theme } = useTheme();
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);
  return (
    <>
      <div className="p-4 shadow">
        <div className="item-center m-auto flex max-w-7xl flex-wrap justify-between">
          <Link href="/notes" className="flex items-center gap-1">
            <Image src={logo} alt="Smart note logo" width={40} height={40} />
            <span className="font-bold">Smart Note</span>
          </Link>
          <div className="flex items-center gap-2">
            <ThemeToggleButton />
            <Button onClick={() => setShowAddNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            <AIChatButton />
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
          </div>
        </div>
      </div>
      <AddNoteDialog open={showAddNoteDialog} setOpen={setShowAddNoteDialog} />
    </>
  );
}
