import type { Job } from "~/data/jobs";

export function JobSalaryRange({ job }: { job: Job }) {
  const salaryMinFormatted = new Intl.NumberFormat("en").format(job?.salaryMin);
  const salaryMaxFormatted = new Intl.NumberFormat("en").format(job?.salaryMax);

  return (
    <p>
      <span>{job?.salaryCurrency?.value} </span>
      <span>{salaryMinFormatted}</span>
      <span> - </span>
      <span>{job?.salaryCurrency?.value} </span>
      <span>{salaryMaxFormatted}</span>
      <span> paid {job?.salaryCategory?.value}</span>
    </p>
  );
}
