"use client";

import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { UploadButton } from "~/utils/uploadthing";

export function UploadImageButton() {
  const router = useRouter();
  return (
    <div className="flex justify-end p-4">
      <UploadButton
        endpoint="imageUploader"
        onUploadBegin={() => {
          toast(
            <div className="items-center">
              <span className="text-lg">Uploading...</span>
            </div>,
            {
              duration: 100000,
              id: "upload-begin",
            },
          );
        }}
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          toast.dismiss("upload-begin");
          toast.success(
            <div className="items-center">
              <span className="text-lg">Upload Complete!</span>
            </div>,
          );
          router.refresh();
        }}
        onUploadError={(error: Error) => {
          toast.dismiss("upload-begin");
          toast.error(
            <div className="items-center">
              <span className="text-lg">Upload Error</span>
            </div>,
          );
          router.refresh();
        }}
      />
    </div>
  );
}
