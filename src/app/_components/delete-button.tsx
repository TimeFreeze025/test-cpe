// app/img/[id]/_components/delete-button.tsx
"use client";

import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { deleteImage } from "~/server/queries";

export function DeleteButton({ idAsNumber }: { idAsNumber: number }) {
  const router = useRouter();

  async function handleDelete() {
    try {
      await deleteImage(idAsNumber); // Call the server action to delete the image
      router.push("/?deleted=true"); // Trigger NotificationHandler
    } catch (err) {
      console.error("Failed to delete image", err);
      // Optionally show a toast error here
    }
  }

  return (
    <Button
      type="button" // prevent default form submission
      onClick={handleDelete}
      variant={"destructive"}
      className="cursor-pointer"
    >
      Delete
    </Button>
  );
}
