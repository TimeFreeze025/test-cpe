import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { getMyImages } from "~/server/queries";
import { UploadDialog } from "./_components/upload-dialog";
import NotificationHandler from "./_components/notification-handler";

export const dynamic = "force-dynamic";

async function Images({}) {
  const images = await getMyImages();

  return (
    <div>
      <div className="flex justify-end p-4">
        <UploadDialog />
      </div>
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-64 flex-col">
            <Link href={`/img/${image.id}`}>
              <div className="relative aspect-video bg-zinc-900">
                <img
                  src={image.url}
                  alt={image.imageName}
                  className="h-full w-full object-contain object-top"
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

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign In Above
        </div>
      </SignedOut>
      <SignedIn>
        <NotificationHandler />
        <Images />
      </SignedIn>
    </main>
  );
}
