import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printing methods | Frida Häggström Gerdt",
};

export default function PrintingMethodsPage() {
  return (
    <div className="px-6 py-8 max-w-lg">
      <h1 className="text-sm font-semibold mb-6">Printing methods</h1>
      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h2 className="font-semibold text-black mb-1">Risograph</h2>
          <p>
            Risograph printing is an eco-friendly stencil printing process. Each
            color is printed separately using soy-based inks. The layering of
            colors creates a unique, slightly tactile result with a handmade
            quality.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-black mb-1">Silk screen</h2>
          <p>
            Screen printing (serigraphy) is a printing technique where ink is
            pushed through a mesh screen onto paper. Each color requires a
            separate screen, and prints are made by hand one at a time.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-black mb-1">Digital print</h2>
          <p>
            High-quality digital prints on acid-free paper. Archival inks
            ensure longevity.
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-black mb-1">Lithography</h2>
          <p>
            Offset lithography is a printing process where the inked image is
            transferred from a plate to a rubber blanket and then to the paper.
          </p>
        </div>
      </div>
    </div>
  );
}
