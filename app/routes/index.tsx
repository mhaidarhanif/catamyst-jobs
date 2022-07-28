import { Link } from "@remix-run/react";

import { DateFormatted } from "~/components/date-formatted";
import { JobSalaryRange } from "~/components/job-salary-range";
import { getJobs } from "~/data/jobs";
import type { JobPost } from "~/data/jobs";

export default function Index() {
  const jobs = getJobs();

  return (
    <div>
      <header className="p-2 mb-5">
        <h1 className="text-3xl font-bold">Catamyst Jobs</h1>
      </header>

      <main className="p-2 flex flex-col gap-2">
        {jobs.map((job: JobPost) => {
          return (
            <article
              key={job.jobId}
              className="job-card p-2 border-solid border-2 border-gray-300 rounded-md flex justify-between"
            >
              <section className="job-card-section flex gap-2">
                <div>
                  <img
                    className="max-w-[80px]"
                    src={job.companyLogoUrl}
                    alt={job.companyName}
                  />
                </div>
                <div>
                  <h2 className="text-md font-bold">{job.companyName}</h2>
                  <h3 className="text-xl font-bold">{job.jobTitle}</h3>
                  <p>{job.locationName}</p>
                  <JobSalaryRange job={job} />
                </div>
              </section>
              <section className="flex flex-col">
                <Link
                  className="bg-teal-500 text-white rounded-md p-2"
                  to={`/jobs/${job.jobId}`}
                >
                  Detail
                </Link>
                <DateFormatted date={job.updatedAt} />
              </section>
            </article>
          );
        })}
      </main>
    </div>
  );
}
