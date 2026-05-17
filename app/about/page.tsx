import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Frida Häggström Gerdt",
  description:
    "Frida Häggström Gerdt is a freelance artist, graphic designer based in Stockholm, Sweden.",
};

const education = [
  {
    years: "2021-2022",
    school: "HDK-Valand (Göteborgs Universitet)",
    courses: [
      "Att bilderboksberätta (Making Stories Through Picture Books)",
      "Bild och berättande (Visual Narrative)",
    ],
  },
  {
    years: "2020",
    school: "Linnéuniversitetet",
    courses: ["Graphic design & typography II"],
  },
  {
    years: "2014-2017",
    school: "Grafikskolan i Stockholm (College of Printmaking Arts)",
    courses: [
      "Artists books, 2014-15",
      "Grafikgrund 2, 2015-16",
      "Grafikskolans arbetsstipendium, 2016-17",
    ],
  },
  {
    years: "2011-2012",
    school: "Nyckelviksskolan",
    courses: ["Bild och grafisk form"],
  },
  {
    years: "2008-2011",
    school: "Södra Latins Gymnasium",
    courses: ["Bild och formgivning"],
  },
];

export default function AboutPage() {
  return (
    <div className="px-6 py-8 max-w-lg">
      <p className="text-sm leading-relaxed mb-4">
        Graphic designer and visual artist with a love for shapes, colors, zines
        and printmaking. For questions and collaborations, don&apos;t hesitate to
        get in touch at{" "}
        <a
          href="mailto:frida.haggstrom@gmail.com"
          className="underline hover:no-underline"
        >
          frida.haggstrom@gmail.com
        </a>
      </p>
      <p className="text-sm leading-relaxed mb-8">
        For digital props and design for film, check out{" "}
        <a
          href="https://digitalrekvisita.se"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          digitalrekvisita.se
        </a>
        .
      </p>

      <div className="flex gap-3 mb-10">
        <a
          href="https://www.instagram.com/fridahgerdt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/fridahgerdt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>

      <hr className="border-gray-300 mb-8 w-64" />

      <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">
        Education
      </p>

      <div className="space-y-6">
        {education.map((item) => (
          <div key={item.years}>
            <p className="text-xs text-gray-500 mb-0.5">{item.years}</p>
            <p className="text-sm font-semibold">{item.school}</p>
            {item.courses.map((c) => (
              <p key={c} className="text-xs text-gray-600">
                {c}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
