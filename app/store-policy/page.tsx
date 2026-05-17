import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Store policy | Frida Häggström Gerdt",
};

export default function StorePolicyPage() {
  return (
    <div className="px-6 py-8 max-w-lg">
      <h1 className="text-sm font-semibold mb-6">Store policy</h1>
      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h2 className="font-semibold text-black mb-1">Shipping</h2>
          <p>
            All prints are shipped from Stockholm, Sweden. Shipping times vary
            depending on destination. Orders are carefully packed to ensure safe
            delivery.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-black mb-1">Returns</h2>
          <p>
            If your order arrives damaged, please contact{" "}
            <a
              href="mailto:frida.haggstrom@gmail.com"
              className="underline hover:no-underline"
            >
              frida.haggstrom@gmail.com
            </a>{" "}
            with a photo of the damage within 7 days of delivery.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-black mb-1">Contact</h2>
          <p>
            For questions about orders or prints, please get in touch at{" "}
            <a
              href="mailto:frida.haggstrom@gmail.com"
              className="underline hover:no-underline"
            >
              frida.haggstrom@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
