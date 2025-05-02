import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import { UploadDialog } from "./_components/upload-dialog";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div>
      <div className="flex flex-row justify-end gap-4 p-4">
        <UploadDialog />
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-64 flex-col">
            <Link href={`/img/${image.id}`}>
              <div className="relative aspect-video rounded-md bg-zinc-900">
                <img
                  src={image.url}
                  alt={image.imageName}
                  className="h-full w-full rounded-md object-contain object-top"
                />
              </div>
            </Link>
            <div className="text-center">{image.imageName}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign In Above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
