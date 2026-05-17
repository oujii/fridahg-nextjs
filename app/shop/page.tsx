import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Frida Häggström Gerdt",
  description:
    "Risograph prints, Screen prints, Digital prints, Offset litography – shop at fridahg.com",
};

export default function ShopPage() {
  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link key={product.slug} href={`/shop/${product.slug}`} className="group">
            <div className="bg-white aspect-square relative overflow-hidden mb-2">
              {product.images[0] && (
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-contain p-6 transition-opacity group-hover:opacity-90"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  unoptimized
                />
              )}
            </div>
            <p className="text-xs">{product.title}</p>
            <p className="text-xs text-gray-500">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
