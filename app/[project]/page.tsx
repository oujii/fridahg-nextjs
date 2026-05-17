import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/data";

export async function generateStaticParams() {
  return projects.map((p) => ({ project: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: `${project.title} | Frida H Gerdt` };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project: slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cols = project.images.length >= 3 ? 3 : project.images.length || 1;

  return (
    <div className="px-6 py-6">
      <h1 className="text-sm font-semibold mb-6">{project.title}</h1>

      {project.images.length > 0 && (
        <div
          className={`grid gap-2 mb-8`}
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {project.images.map((src, i) => (
            <div key={i} className="bg-[#ebebeb] aspect-square relative overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 33vw"
                unoptimized
              />
            </div>
          ))}
        </div>
      )}

      <div className="max-w-lg">
        {project.content.map((line, i) => (
          <p key={i} className="text-xs text-gray-600 mb-1 leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
