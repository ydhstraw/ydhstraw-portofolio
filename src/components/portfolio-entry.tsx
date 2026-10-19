import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Portfolio } from "@/data/portfolio";

export function PortfolioEntry({ portfolio }: { portfolio: Portfolio }) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {portfolio.imageUrl && (
        <div className="w-1/4 min-w-[160px] relative">
          <Image
            src={portfolio.imageUrl}
            alt={portfolio.title}
            width={160}
            height={200}
            className="rounded-lg"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-md">
          {portfolio.projectUrl ? (
            <a
              href={portfolio.projectUrl} target="_blank"
              className="group inline-flex items-center gap-2 text-zinc-300 hover:text-zinc-50 transition-colors duration-300"
            >
              {portfolio.title}
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
            </a>
          ) : (
            portfolio.title
          )}
        </h3>
        {portfolio.type && (
          <p className="text-xs text-zinc-400 leading-relaxed mb-3">
            {portfolio.type}
          </p>
        )}
        

        {portfolio.technologies && (
          <div className="flex gap-2 mb-2 flex-wrap">
            {portfolio.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-zinc-600 px-2 py-1 bg-zinc-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        
        <p className="text-sm text-zinc-300 mb-4">
          {portfolio.description}
        </p>
        <div className="flex gap-6">
          {/* {portfolio.projectUrl && (
            <a
              href={portfolio.projectUrl} target="_blank"
              className="group inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-50 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Project</span>
            </a>
          )} */}
          {portfolio.codeUrl && (
            <a
              href={portfolio.codeUrl} target="_blank"
              className="group inline-flex items-center gap-2 text-xs text-zinc-400 hover:text-zinc-50 transition-colors duration-300"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
