import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { UploadImageButton } from "./_components/upload-image-button";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div>
      <UploadImageButton />
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-64 flex-col">
            <div className="relative aspect-video rounded-md bg-zinc-900">
              <img
                src={image.url}
                alt={image.name}
                className="h-full w-full rounded-md object-contain object-top"
              />
            </div>
            <div className="text-center">{image.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="">
      {/* <Link href={"/about"}>About Page Link</Link> */}
      <SignedOut>
        <div className="h-full w-full p-4 text-center text-2xl">
          Please Sign in to view the images.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
