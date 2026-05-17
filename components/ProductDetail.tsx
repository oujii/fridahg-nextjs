"use client";
import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/lib/data";

export default function ProductDetail({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);
  const descLines = product.description.split("\n").filter(Boolean);

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-4xl">
      <div className="md:w-1/2">
        <div className="bg-white aspect-square relative overflow-hidden mb-3">
          {product.images[selectedImage] && (
            <Image
              src={product.images[selectedImage]}
              alt={product.title}
              fill
              className="object-contain p-8"
              unoptimized
            />
          )}
        </div>
        {product.images.length > 1 && (
          <div className="flex gap-2">
            {product.images.map((src, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`w-14 h-14 bg-white relative overflow-hidden border-2 transition-colors ${
                  i === selectedImage ? "border-black" : "border-transparent"
                }`}
              >
                <Image src={src} alt="" fill className="object-contain p-1" unoptimized />
              </button>
            ))}
          </div>
        )}
        {descLines.length > 0 && (
          <div className="mt-4">
            {descLines.map((line, i) => (
              <p key={i} className="text-sm font-medium leading-snug">{line}</p>
            ))}
          </div>
        )}
      </div>

      <div className="md:w-1/2">
        <h1 className="text-2xl font-bold mb-3">{product.title}</h1>
        <p className="text-gray-500 text-sm mb-6">{product.price}</p>
        <p className="text-xs font-medium mb-2">Quantity *</p>
        <div className="flex items-center border border-gray-300 w-fit mb-6">
          <button
            onClick={() => setQty(Math.max(1, qty - 1))}
            className="px-3 py-2 text-lg leading-none hover:bg-gray-100 transition-colors"
          >
            −
          </button>
          <span className="px-4 py-2 text-sm min-w-[2rem] text-center">{qty}</span>
          <button
            onClick={() => setQty(qty + 1)}
            className="px-3 py-2 text-lg leading-none hover:bg-gray-100 transition-colors"
          >
            +
          </button>
        </div>
        <button
          className="w-full bg-black text-white text-sm py-4 hover:bg-gray-900 transition-colors cursor-pointer"
          onClick={() =>
            alert("Shop coming soon – contact frida.haggstrom@gmail.com to purchase")
          }
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
