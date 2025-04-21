import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {/* <Link href={"/about"}>About Page Link</Link> */}
      <Images />
    </main>
  );
}

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
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-64 flex-col">
          <div className="relative aspect-video bg-zinc-900">
            <img
              src={image.url}
              alt={image.id.toString()}
              className="h-full w-full object-contain object-top"
            />
          </div>
          <div className="text-center">{image.id}</div>
        </div>
      ))}
    </div>
  );
}
