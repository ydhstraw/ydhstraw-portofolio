import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  ArrowUpRight,
  // GraduationCap,
  Instagram,
  Facebook,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="md:sticky top-12 flex flex-row-reverse md:flex-col gap-4 md:space-y-8">
      {aboutMe.imageUrl && (
        <div className="w-1/3 md:w-full flex-shrink-0">
          <div className="relative max-h-[45vh] md:w-[65%] aspect-[3/4]">
            <Image
              src={aboutMe.imageUrl}
              alt={aboutMe.name}
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      )}
      <div className="w-2/3 md:w-full">
        <h1 className="font-serif text-4xl font-light tracking-wide mb-3">
          {aboutMe.name}
        </h1>
        {aboutMe.altName && (
          <p className="text-zinc-600 text-md leading-relaxed tracking-wide mb-6">
            {aboutMe.altName}
          </p>
        )}
        <p className="text-zinc-400 text-s leading-relaxed tracking-wide mb-6">
          {aboutMe.title}
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        <div className="flex gap-6 mb-6">
          {aboutMe.blogUrl && (
            <a
              href={aboutMe.blogUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-300 hover:text-zinc-50 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">Blog</span>
            </a>
          )}
          {aboutMe.cvUrl && (
            <a
              href={aboutMe.cvUrl}
              className="group inline-flex items-center gap-2 text-xs text-zinc-300 hover:text-zinc-50 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase">CV</span>
            </a>
          )}
        </div>
        <div className="space-y-2">
          <a
            href={`mailto:${aboutMe.email}`}
            className="inline-flex items-center gap-2 text-md text-zinc-300 hover:text-zinc-50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={14} />
            Email
          </a>
          {/* {aboutMe.googleScholarUrl && (
            <>
              <br />
              <a
                href={aboutMe.googleScholarUrl}
                className="inline-flex items-center gap-2 text-md text-zinc-300 hover:text-zinc-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={14} />
                Google Scholar
              </a>
            </>
          )} */}
          {aboutMe.linkedinUsername && (
            <>
              <br />
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="inline-flex items-center gap-2 text-md text-zinc-300 hover:text-zinc-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
            </>
          )}
          {aboutMe.githubUsername && (
            <>
              <br />
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="inline-flex items-center gap-2 text-md text-zinc-300 hover:text-zinc-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} />
                Github
              </a>
            </>
          )}
          {aboutMe.twitterUsername && (
            <>
              <br />
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                className="inline-flex items-center gap-2 text-md text-zinc-300 hover:text-zinc-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={14} />X
              </a>
            </>
          )}
          {aboutMe.instagramUsername && (
            <>
              <br />
              <a
                href={`https://instagram.com/${aboutMe.instagramUsername}`}
                className="inline-flex items-center gap-2 text-md text-zinc-300 hover:text-zinc-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={14} />Instagram
              </a>
            </>
          )}
          {aboutMe.facebookLink && (
            <>
              <br />
              <a
                href={`https://facebook.com/${aboutMe.facebookLink}`}
                className="inline-flex items-center gap-2 text-md text-zinc-300 hover:text-zinc-50 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={14} />Facebook
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
