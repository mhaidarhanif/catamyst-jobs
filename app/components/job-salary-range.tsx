import type { JobPost } from "~/data/job-posts";

export function JobSalaryRange({ job }: { job: JobPost }) {
  const salaryMinFormatted = new Intl.NumberFormat("en").format(job.salaryMin);
  const salaryMaxFormatted = new Intl.NumberFormat("en").format(job.salaryMin);

  return (
    <p>
      <span>{job.salaryCurrency} </span>
      <span>{salaryMinFormatted}</span>
      <span> - </span>
      <span>{job.salaryCurrency} </span>
      <span>{salaryMaxFormatted}</span>
      <span> paid {job.salaryCategory}</span>
    </p>
  );
}
