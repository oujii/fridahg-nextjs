export type Product = {
  slug: string;
  title: string;
  price: string;
  images: string[];
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  images: string[];
  content: string[];
};

export const products: Product[] = [
  {
    slug: "pojk",
    title: "Pojk (Riso)",
    price: "80,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_7f6bfee290c34809ae67ffd9dedf910f~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
      "https://static.wixstatic.com/media/bba9dd_47da87375a9e48ea81f9c269d04661bf~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA5 (210x148,5mm)\n2 colors\n170g paper (Munken pure)\n2020",
  },
  {
    slug: "untitled-riso",
    title: "Untitled (Riso)",
    price: "60,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_5b0d2b7d2014499d88a1b97b2a26ad1b~mv2.gif/v1/fit/w_800,h_800,q_90/file.webp",
      "https://static.wixstatic.com/media/bba9dd_bf43b7c76fc944bbbd5e953cb2ce5c3f~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\n148x148mm\n170gsm paper (Munken pure)\n2021",
  },
  {
    slug: "smudge-a6",
    title: "Smudge A6 (Riso)",
    price: "40,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_8ee48506a56745a7a9d967e60e4ebaf2~mv2.gif/v1/fit/w_800,h_800,q_90/file.webp",
      "https://static.wixstatic.com/media/bba9dd_5dbd374acc3e42ee84a94b7ff3287271~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA6 (105x148mm)\n100-120g paper\n2020",
  },
  {
    slug: "jupiters-oga",
    title: "Jupiters öga (Lithography)",
    price: "200,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_a59ac2a3613e446389a3c68105eafcb7~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Lithography\nA4 (210x297mm)\n2017",
  },
  {
    slug: "tre-solar-riso",
    title: "Tre solar (Riso)",
    price: "120,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_a5c3fc4dff5f46aa9737441ae3621c36~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
      "https://static.wixstatic.com/media/bba9dd_2a21dc670bb748a7bf1d89d0581222fb~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA4 (210x297mm)\n3 colors\n100g paper\n2020",
  },
  {
    slug: "trio-a3-riso",
    title: "Trio (Riso)",
    price: "300,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_e7a8a486871e4d4787ddd1fc10825c02~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
      "https://static.wixstatic.com/media/bba9dd_7631e844769c4eb3880764ae390547c9~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA3 (297x420mm)\n2 colors\n100g paper\n2021",
  },
  {
    slug: "puyo-puyo",
    title: "Puyo puyo (Riso)",
    price: "300,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_5d3ffa97fa18402dbfe33bdf40b18e35~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
      "https://static.wixstatic.com/media/bba9dd_29f053e070944638b65a30eb78b18dca~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA3 (297x420mm)\n3 colors\n100g paper\n2021",
  },
  {
    slug: "smudge-a3-digital-print",
    title: "Smudge A3 (Digital print)",
    price: "200,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_38ddaecea3c84740988a8010b325f4dd~mv2.gif/v1/fit/w_800,h_800,q_90/file.webp",
      "https://static.wixstatic.com/media/bba9dd_822658eae8494f8981a4165296d981ee~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Digital print\nA3 (297x420mm)\n200g paper\n2020",
  },
  {
    slug: "swan-a6-riso",
    title: "Svanen (Riso)",
    price: "40,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_f05bb091a7ea497e8521f13143f16ea8~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA6 (105x148mm)\n2 colors\n100g paper\n2021",
  },
  {
    slug: "cosmos-a5-riso",
    title: "Cosmos (Riso)",
    price: "60,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_40f9512e1bee4fb0a4b13b1f696b42aa~mv2.gif/v1/fit/w_800,h_800,q_90/file.webp",
      "https://static.wixstatic.com/media/bba9dd_0c51d61ff33a4d67b6c3854f72514e9c~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA5 (148x210mm)\n2 colors\n100g paper\n2021",
  },
  {
    slug: "berg-silk-screen",
    title: "Berget (Silk screen)",
    price: "750,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_0a98813408154a59b364f8dea548cb9b~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
      "https://static.wixstatic.com/media/bba9dd_eee6242916774a80814164a522edfde0~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Silk screen print\nA2 (420x594mm)\n2 colors\n200g paper\n2020",
  },
  {
    slug: "luftgud",
    title: "Luftgud (Riso)",
    price: "100,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_1e3ccb7f4eee4ef7a3b160ca0660276a~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
      "https://static.wixstatic.com/media/bba9dd_3a6faa8b60254ebd9221a88ed93b2711~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA4 (210x297mm)\n2 colors\n100g paper\n2021",
  },
  {
    slug: "horses-a6-riso",
    title: "Horses A6 (Riso)",
    price: "40,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_eda16c5b364947a8bb0d90bde9afa303~mv2.gif/v1/fit/w_800,h_800,q_90/file.webp",
      "https://static.wixstatic.com/media/bba9dd_13bfadc3a17642349d6698826096c15a~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA6 (105x148mm)\n2 colors\n100g paper\n2020",
  },
  {
    slug: "solero",
    title: "Solero (Riso)",
    price: "350,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_33c961cdc47145f7b3b49e610ce613fd~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
      "https://static.wixstatic.com/media/bba9dd_bd6742301b9643c8aaf0642e8efc6e4f~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA2 (420x594mm)\n3 colors\n100g paper\n2021",
  },
  {
    slug: "lok",
    title: "Lök (Silk screen)",
    price: "750,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_30b68aaf58384694aaa88889bcc13f09~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
      "https://static.wixstatic.com/media/bba9dd_45b88927c9b14ce993ea7c57f8876b2b~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Silk screen print\nA2 (420x594mm)\n2 colors\n200g paper\n2020",
  },
  {
    slug: "spoke",
    title: "Spöke (Riso)",
    price: "180,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_38593b9a21b4413ea26fd759833f4cf1~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Risograph print\nA4 (210x297mm)\n2 colors\n100g paper\n2021",
  },
  {
    slug: "spok-silk-screen",
    title: "Spök (Silk screen)",
    price: "750,00 kr",
    images: [
      "https://static.wixstatic.com/media/bba9dd_cb8a75991ace4ffba33cd7b5a7302cac~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
      "https://static.wixstatic.com/media/bba9dd_11169051e7f64566b50c71a76b7825e9~mv2.jpg/v1/fill/w_800,h_800,q_90/file.jpg",
    ],
    description: "Silk screen print\nA2 (420x594mm)\n3 colors\n200g paper\n2021",
  },
];

export const projects: Project[] = [
  {
    slug: "athens-rhythm-hop",
    title: "Athens Rhythm Hop",
    images: [
      "https://static.wixstatic.com/media/bba9dd_1e053f9317584d1c95ab0d25061b180e~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_ac45d85dc7a04c97821efa5f967d22ad~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_e7c4efdbd6e64134853382dc43b87cc3~mv2.gif",
    ],
    content: [
      "New flyer design for swing dance festival Athens Rhythm Hop, with their existing logotype as starting point. Adapted into flyers, bag and t-shirt print, diplomas, brochure and interior decoration.",
    ],
  },
  {
    slug: "owe90",
    title: "Owe 90",
    images: [
      "https://static.wixstatic.com/media/bba9dd_2dc6a5de4f214f99a74df76d1ce8a24d~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_d476a0204ebc4d939f32913b86860dfa~mv2.gif",
      "https://static.wixstatic.com/media/bba9dd_f91e68bbbdff483885a5cee9a446c1d2~mv2.jpg",
    ],
    content: [
      "Owe Thörnqvist was one of the first artists to introduce rock music in Sweden in the 50s. In 2019 he celebrated his 90th birthday with a jubilee phonogram consisting of previously unreleased as well as newly recorded songs. The CD, Owe 90, was released together with a unique booklet, consisting of song lyrics as well as stories and archive pictures from Thörnqvist's life and career, in close collaboration with Owe himself.",
      "Graphic design and layout (booklet, CD and cover)",
      "Client: Porter & Thorells Syndrom",
      "56 pages, 210x210mm. 2019",
    ],
  },
  {
    slug: "kryptogam",
    title: "Kryptogam",
    images: [
      "https://static.wixstatic.com/media/bba9dd_18ef02e89eb64dfd8560707d3a8cb757~mv2.gif",
      "https://static.wixstatic.com/media/bba9dd_7eb5a27b54d04e198da2f71a9af5922c~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_12b844b6595744199e6399a1e99d3f8c~mv2.gif",
    ],
    content: [
      "Cover art for Swedish ambient project Kryptogam, consisting of three individual singles forming a full album (LP).",
      "Album: Karantän",
      "Singles: Rutin, Framtid, Nutid",
    ],
  },
  {
    slug: "kanslan",
    title: "Känslan",
    images: [
      "https://static.wixstatic.com/media/bba9dd_d369d9357b7a4099ad9d71511436e65c~mv2.gif",
      "https://static.wixstatic.com/media/bba9dd_090103ef7a024d1482e13cf754ac259d~mv2.gif",
      "https://static.wixstatic.com/media/bba9dd_97afde74c0564569bd21562890d9008f~mv2.jpg",
    ],
    content: [
      "'Känslan' is an abstract picture book that goes through a series of emotions. Big and small, enjoyable and unpleasant. How does it feel? What are your fears? What do you see in the pictures? There is no right or wrong — let your imagination lead the way on this emotional journey of shapes and colors.",
      "Recommended from 5 years old and up.",
      "48 pages, 15x15cm. 2021 (Unpublished).",
    ],
  },
  {
    slug: "graphic-design-for-swing-dance",
    title: "Graphic design for swing dance",
    images: [
      "https://static.wixstatic.com/media/bba9dd_090103ef7a024d1482e13cf754ac259d~mv2.gif",
    ],
    content: [
      "Various flyers and designs for swing dance related happenings such as Herräng Dance Camp, Athens Rhythm Hop and shows by Harlem Hot Shots.",
    ],
  },
  {
    slug: "se-upp-foer-livet",
    title: "Se upp för livet!",
    images: [
      "https://static.wixstatic.com/media/bba9dd_37c9bb2914ac40fda03372b23320201b~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_91641d4093f94a039c820bb9cb7e8f46~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_67d730211810427b8176dbf3effd80a6~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_2a0b584ea2954a018825e27179cb1077~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_7d43659b1264456f8b9cbd4096e56ab6~mv2.jpg",
    ],
    content: [
      "Artist's book collection, memories on waste paper. Final project at Grafikskolan 2015, group exhibition at Grafiska Sällskapet, Stockholm. 10 pieces, A6 (folded A3), edition of 10.",
    ],
  },
  {
    slug: "inmemoriaminfuturum",
    title: "In memoriam/In futurum",
    images: [
      "https://static.wixstatic.com/media/bba9dd_216b331440564bbb9575597174ad008c~mv2.gif",
      "https://static.wixstatic.com/media/bba9dd_388cde6ab28449f69912365891b86983~mv2.gif",
      "https://static.wixstatic.com/media/bba9dd_4bd9c1cdc7484f2aa400af74fb7b073a~mv2.gif",
      "https://static.wixstatic.com/media/bba9dd_4be6f62aa6d04a4b89013e6e02232807~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_c7d3a0facb15420bb1a9bafc18e00bb2~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_d87607a8a36b4ea593811d492bfa8640~mv2.jpg",
    ],
    content: [
      "Visual identity, website and logo for In memoriam/In futurum.",
      '"In memoriam/In futurum is an interdisciplinary artistic project with curating students at Stockholm University, artists studying at the Royal Institute of Art (KKH) and student researchers from different departments at Stockholm University. … an experimental zine project bridging art and science"',
      "The task was to create a simple logo and some sort of visual coherence for the project's website and social media channels. As In memoriam/In futurum circulates around experimentation I was given completely free hands next to the keywords changeable, playful (non-corporate) and research, as well as the color orange.",
      'I went for the typeface Syne, which has a nice contrast between modern strictness and experimental playfulness. The mischievous italic style became the foundation of the illustrations, hinting of both experimentation and research, with its scientific symbols made into little "artworks". The orange shapes are a product of my own experimentation, starting with simple vector shapes, printed through a Risograph, run through the scanner and finally distorted in Photoshop. All shapes and illustrations can be combined freely as a way for the management to experiment themselves along the way, and have the visuals be constantly changeable and organic.',
    ],
  },
  {
    slug: "hdc-weekly-magazine",
    title: "HDC Weekly Magazine",
    images: [
      "https://static.wixstatic.com/media/bba9dd_53a8d56d0d4749dab74aa94a88312ec8~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_a079a6a0f5f24eb69c4f909bfc92b7b8~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_cc1929746c6548f9b528c7a62ee02956~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_d0eff151274a4007b1cf40d0c98f2b91~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_dad09806c8d0425b98f7520486f2c2eb~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_eb6cc12f9fe9405290c9b1773d45e28e~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_ecdb7dad9e7e4229826c74d48a07f720~mv2.jpg",
    ],
    content: [
      "Herräng Dance camp is the world's largest and oldest swing dance festival running for five weeks each summer outside of Stockholm, Sweden. In 2016 they decided to update their weekly brochure—previously just filled with plain text and information about the camp's facilities—and partly turn it into an editorial magazine. As the company's only active graphic designer I was in charge for the entire base design, layout and illustrations, and worked closely together with the editor to develop and create the content of the magazines.",
      "HDC Weekly Magazine is handed out to all participants of the festival for free, with one new issue per week, featuring an interview with a dancer teaching at the camp that particular week. Each issue has its own primary color (from the graphic identity) to differentiate it from the previous weeks, as some people stay at the camp for a longer period of time.",
      "Running each festival since 2017, five issues per year. 28 pages. A5.",
      "Publisher: Herräng Dance Camp",
      "Editor in Chief: Annika Munter",
      "Main Photographer: Tamara Pinco",
      "Graphic Design and Illustration: Frida Häggström Gerdt",
    ],
  },
  {
    slug: "hex",
    title: "hex",
    images: [
      "https://static.wixstatic.com/media/bba9dd_1be7951654f74d33a9990b2dab579d47~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_6383c5f2e98541a2b955ac75450fcab8~mv2.jpg",
      "https://static.wixstatic.com/media/bba9dd_ee6b0895746848e3a98c6fe74988abcf~mv2.jpg",
    ],
    content: [
      "A free monthly, minimalistic one-spread periodical for friends and acquaintances, running between April 2016 and Mars 2017. Full details at cargocollective.com/hextidsskrift.",
    ],
  },
];

// Exakt ordning och exakta bilder extraherade från Wix-startsidan via Playwright
export const portfolioItems = [
  { slug: "se-upp-foer-livet",             image: "https://static.wixstatic.com/media/bba9dd_1e053f9317584d1c95ab0d25061b180e~mv2.jpg/v1/fill/w_600,h_600,q_90/file.jpg" },
  { slug: "hdc-weekly-magazine",            image: "https://static.wixstatic.com/media/bba9dd_ac45d85dc7a04c97821efa5f967d22ad~mv2.jpg/v1/fill/w_600,h_600,q_90/file.jpg" },
  { slug: "kryptogam",                      image: "https://static.wixstatic.com/media/bba9dd_e7c4efdbd6e64134853382dc43b87cc3~mv2.gif/v1/fit/w_600,h_600,q_90/file.webp" },
  { slug: "owe90",                          image: "https://static.wixstatic.com/media/bba9dd_2dc6a5de4f214f99a74df76d1ce8a24d~mv2.jpg/v1/fill/w_600,h_600,q_90/file.jpg" },
  { slug: "graphic-design-for-swing-dance", image: "https://static.wixstatic.com/media/bba9dd_d476a0204ebc4d939f32913b86860dfa~mv2.gif/v1/fit/w_600,h_600,q_90/file.webp" },
  { slug: "athens-rhythm-hop",              image: "https://static.wixstatic.com/media/bba9dd_f91e68bbbdff483885a5cee9a446c1d2~mv2.jpg/v1/fill/w_600,h_600,q_90/file.jpg" },
  { slug: "hex",                            image: "https://static.wixstatic.com/media/bba9dd_18ef02e89eb64dfd8560707d3a8cb757~mv2.gif/v1/fit/w_600,h_600,q_90/file.webp" },
  { slug: "kanslan",                        image: "https://static.wixstatic.com/media/bba9dd_7eb5a27b54d04e198da2f71a9af5922c~mv2.jpg/v1/fill/w_600,h_600,q_90/file.jpg" },
  { slug: "owe90",                          image: "https://static.wixstatic.com/media/bba9dd_12b844b6595744199e6399a1e99d3f8c~mv2.gif/v1/fit/w_600,h_600,q_90/file.webp" },
  { slug: "se-upp-foer-livet",              image: "https://static.wixstatic.com/media/bba9dd_d369d9357b7a4099ad9d71511436e65c~mv2.gif/v1/fit/w_600,h_600,q_90/file.webp" },
  { slug: "inmemoriaminfuturum",            image: "https://static.wixstatic.com/media/bba9dd_090103ef7a024d1482e13cf754ac259d~mv2.gif/v1/fit/w_600,h_600,q_90/file.webp" },
  { slug: "kryptogam",                      image: "https://static.wixstatic.com/media/bba9dd_97afde74c0564569bd21562890d9008f~mv2.jpg/v1/fill/w_600,h_600,q_90/file.jpg" },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
