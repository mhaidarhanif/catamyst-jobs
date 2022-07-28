import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { DateFormatted } from "../../components/date-formatted";
import { JobSalaryRange } from "../../components/job-salary-range";
import { getJob } from "../../data/jobs";
import { parseHtml } from "../../libs/html-react-parser";

export default function JobId() {
  const params = useParams();
  const job = getJob(params.jobId as string);

  if (!job) {
    return (
      <div>
        <header>
          <Link to="/">Back</Link>
          <h1>Job not found</h1>
        </header>
      </div>
    );
  }

  return (
    <div>
      <header>
        <Link to="/">Back</Link>
        <h1>Catamyst Jobs</h1>
      </header>

      <main className="p-2">
        <article className="job-post">
          <section className="job-post-section">
            <div>
              <img src={job?.companyLogoUrl} alt={job?.companyName} />
            </div>
            <div>
              <h2>{job?.companyName} is hiring</h2>
              <h3>{job?.jobTitle}</h3>
            </div>
          </section>

          <section>
            <p>{job?.locationName}</p>
            <JobSalaryRange job={job} />
            <DateFormatted date={job.updatedAt} />
          </section>

          <section className="my-5">
            <div>{parseHtml(job?.jobDescription)}</div>
          </section>

          <section>
            <a target="_blank" rel="noopener noreferrer" href={job?.applyUrl}>
              Apply
            </a>
          </section>
        </article>
      </main>
    </div>
  );
}
