import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  const photoId = (await params).id;
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo ID");
  const image = await getImage(idAsNumber);
  return (
    <div className="flex h-full min-h-0 w-full min-w-0 overflow-y-hidden">
      <img src={image.url} alt={image.fileName} className="w-96" />
    </div>
  );
}
