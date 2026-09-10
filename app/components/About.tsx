import { PersonalDetail } from "./PersonalDetail";

export function About() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <article className="panel">
        <div className="panel-title">
          <span className="size-2 rounded-full bg-error/80" />
          <span className="size-2 rounded-full bg-warning/80" />
          <span className="size-2 rounded-full bg-primary/80" />
          <span className="ml-2">about.md</span>
        </div>
        <div className="space-y-4 p-5">
          <p className="text-text-primary">
            I&apos;m <span className="text-primary">Andrew Pringle</span>, an &quot;Integrated Information Technology&quot; student
            at the University of South Carolina interested in network administration, cybersecurity, and basic IT concepts.
            I am also very interested in pure mathematics and analysis.
          </p>
          <p className="text-text-secondary">I am looking for a summer 2027 networking administration internship.</p>
        </div>
      </article>
      <article className="panel">
        <div className="panel-title">
          <span className="text-primary">▸</span>
          Profile
        </div>
        <div className="flex flex-col gap-1 p-2 sm:p-3">
          <PersonalDetail
            label={"UNIVERSITY"}
            detail={"University of South Carolina"}
          />
          <PersonalDetail label={"MAJOR"} detail={"Integrated IT"} />
          <PersonalDetail label={"GRADUATION"} detail={"Class of 2030"} />
          <PersonalDetail
            label={"STATUS"}
            detail={"Looking for networking internship"}
          />
        </div>
      </article>
    </div>
  );
}
