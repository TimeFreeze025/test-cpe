import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { DeleteButton } from "./delete-button";

export default async function FullPageImageView(props: { photoId: String }) {
  const idAsNumber = Number(props.photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid image id");

  const image = await getImage(idAsNumber);

  const uploaderInfo = await (await clerkClient()).users.getUser(image.userId);

  return (
    <div className="flex border-t border-b md:flex-row">
      <div className="flex items-center justify-center">
        <img
          src={image.url}
          alt={image.imageName}
          className="aspect-video h-4/5 w-auto flex-shrink object-contain"
        />
      </div>

      <div className="flex flex-auto flex-shrink-0 flex-col border-l">
        <div className="border-b p-2 text-center text-lg">
          {image.imageName}
        </div>

        <div className="flex flex-col p-2">
          <span>Uploaded By:</span>
          <span>{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col p-2">
          <span>Created At:</span>
          <span>{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="p-2">
          <DeleteButton idAsNumber={idAsNumber} />
        </div>
      </div>
    </div>
  );
}
