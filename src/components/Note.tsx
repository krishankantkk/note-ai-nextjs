import { Note as NoteModel } from "@prisma/client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface NoteProps {
  note: NoteModel;
}

export default function Note({ note }: NoteProps) {
  const wasUpdated = note.updateAt > note.createdAt;

  const createdUpdatedAtTimestamp = (
    wasUpdated ? note.updateAt : note.createdAt
  ).toDateString();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        {createdUpdatedAtTimestamp}
        {wasUpdated && " (updated) "}
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{note.content}</p>
      </CardContent>
    </Card>
  );
}
