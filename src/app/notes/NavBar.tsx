"use client";
import logo from "@/app/asset/logo.png";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddNoteDialog from "@/components/AddNoteDialog";

export default function NavBar() {
  const [showAddNoteDialog, setShowAddNoteDialog] = useState(false);
  return (
    <>
      <div className="p-4 text-black shadow">
        <div className="item-center m-auto flex max-w-7xl flex-wrap justify-between">
          <Link href="/notes" className="flex items-center gap-1">
            <Image src={logo} alt="Smart note" width={40} height={40} />
            <span className="font-bold">Smart Note</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button onClick={() => setShowAddNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </div>
      <AddNoteDialog open={showAddNoteDialog} setOpen={setShowAddNoteDialog} />
    </>
  );
}
