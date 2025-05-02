"use client";

import { Upload } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { set } from "zod";
import { Button } from "~/components/ui/button";
import { UploadButton } from "~/utils/uploadthing";

// export function UploadImageButton() {
//   const router = useRouter();
//   return (
//     <UploadButton
//       endpoint="imageUploader"
//       onUploadBegin={() => {
//         toast(
//           <div className="items-center">
//             <span className="text-lg">Uploading...</span>
//           </div>,
//           {
//             duration: 100000,
//             id: "upload-begin",
//           },
//         );
//       }}
//       onClientUploadComplete={(res) => {
//         console.log("Files: ", res);
//         toast.dismiss("upload-begin");
//         toast.success(
//           <div className="items-center">
//             <span className="text-lg">Upload Complete!</span>
//           </div>,
//         );
//         router.refresh();
//       }}
//       onUploadError={(error: Error) => {
//         toast.dismiss("upload-begin");
//         toast.error(
//           <div className="items-center">
//             <span className="text-lg">Upload Error</span>
//           </div>,
//         );
//         router.refresh();
//       }}
//     />
//   );
// }

export function UploadImageButton() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedImageName, setSelectedImageName] = useState<string | null>(
    null,
  );
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedImageName(file.name);
        setSelectedImageUrl(URL.createObjectURL(file));
      } else {
        setSelectedImageUrl(null);
      }
    } else {
      setSelectedImageName(null);
      setSelectedImageUrl(null);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {selectedImageUrl != null && (
        <div>
          <img
            src={selectedImageUrl!}
            className="w-full rounded-md object-cover"
          />
        </div>
      )}

      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={() => inputRef.current?.click()}>
          <Upload />
        </Button>
        <input
          type="file"
          ref={inputRef}
          className="sr-only"
          accept="image/"
          onChange={handleImageSelect}
        />
        {setSelectedImageName != null && (
          <div>Selected Images: {selectedImageName}</div>
        )}
      </div>
    </div>
  );
}
