import Link from "next/link";
import FullPageImageView from "~/app/_components/full-image-page";
import { Button } from "~/components/ui/button";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const photoId = (await params).id;

  return (
    <div className="flex flex-col gap-4 p-4">
      <Link href="/" replace>
        <Button className="w-fit">Go to Home</Button>
      </Link>
      <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
        {/* <img src={image.url} alt={image.fileName} className="w-96" /> */}
        <FullPageImageView photoId={photoId} />
      </div>
    </div>
  );
}
