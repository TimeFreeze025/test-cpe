import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { UploadImageButton } from "./_components/upload-image-button";

export const dynamic = "force-dynamic";

function Images() {
  const urls = [
    "https://him84iucx1.ufs.sh/f/KgWDHnupYCRgtsIKBt5DZF93b014zRNcrKts5weJSxivp7qY",
    "https://him84iucx1.ufs.sh/f/KgWDHnupYCRgX1P2ieuEix73tej25sLSaMw1dpoOThBIy9Um",
    "https://him84iucx1.ufs.sh/f/KgWDHnupYCRguIc0Yz2pJ8kijQN7g0sGowOBWSUtMPx6vAYD",
  ];

  const images = urls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <div>
      <UploadImageButton />
      <div className="flex flex-wrap justify-center gap-6 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-64 flex-col">
            <div className="relative aspect-video rounded-md bg-zinc-900">
              <img
                src={image.url}
                alt={image.id.toString()}
                className="h-full w-full rounded-md object-contain object-top"
              />
            </div>
            <div className="text-center">{image.id}</div>
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
        <div className="h-full w-full text-center text-2xl">
          Please Sign in to view the images.
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
