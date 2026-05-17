import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/data";
import ProductDetail from "@/components/ProductDetail";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return { title: `${product.title} | Frida H Gerdt` };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="px-6 py-8">
      <ProductDetail product={product} />
    </div>
  );
}
