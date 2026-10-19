import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-300 mt-1">{experience.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif">
          {experience.title} —{" "}
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-50 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </h3>
        {experience.type && (
          <p className="text-xs text-zinc-400 leading-relaxed">
            {experience.type}
          </p>
        )}
        {/* {experience.advisor && (
          <p className="text-sm text-zinc-400 leading-relaxed italic mt-2">
            Advisor: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-sm text-zinc-400 leading-relaxed italic mt-2">
            Manager: {experience.manager}
          </p>
        )} */}


        {/* {experience.description && (
          <p className="text-sm text-zinc-300 mt-3">
            {experience.description}
          </p>
        )} */}

        {experience.description && (
          <div className="text-sm text-zinc-300 mt-3">
            {experience.description.map((desc, index) => (
              <p key={index}>
                {desc}
              </p>
            ))}
          </div>
        )}

        {experience.technologies && (
          <div className="flex gap-2 flex-wrap mt-3">
            {experience.technologies.map((tech, index) => (
              <span
                key={index}
                className="text-xs text-zinc-600 px-2 py-1 bg-zinc-100 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
}
