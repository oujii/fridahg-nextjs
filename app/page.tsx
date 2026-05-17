import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="px-2 py-2">
      <div className="grid grid-cols-2 md:grid-cols-3">
        {portfolioItems.map((item, i) => (
          <Link key={i} href={`/${item.slug}`} className="block group">
            <div className="bg-[#ebebeb] aspect-square relative overflow-hidden">
              <Image
                src={item.image}
                alt=""
                fill
                className="object-contain p-4 transition-opacity group-hover:opacity-90"
                sizes="(max-width: 768px) 50vw, 33vw"
                unoptimized
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
