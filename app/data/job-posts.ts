export type JobPost = {
  _id?: string;
  jobId?: string;
  companyName: string;
  companyLogoUrl: string;
  jobTitle: string;
  jobDescription: string;
  locationName: string;
  salaryCurrency: string;
  salaryMin: number;
  salaryMax: number;
  salaryCategory: string;
  applyUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export const dataJobPosts: JobPost[] = [
  {
    jobId: "7ed4a0cc-978e-44df-a573-56fbd1f6d07d",
    companyName: "Company Name",
    companyLogoUrl: "https://logo.clearbit.com/google.com",
    jobTitle: "Job Title",
    locationName: "Location Name",
    salaryCurrency: "IDR",
    salaryMin: 10_000_000,
    salaryMax: 20_000_000,
    salaryCategory: "monthly",
    jobDescription: "<p>Paragraph 1</p><p>Paragraph 2</p>",
    applyUrl: "https://example.com",
    createdAt: new Date("20 January 2022"),
    updatedAt: new Date("28 January 2022"),
  },
  {
    jobId: "f1294206-4ea9-472b-bfcd-acd2fe5dbeae",
    companyName: "Catamyst",
    companyLogoUrl: "https://logo.clearbit.com/catamyst.com",
    jobTitle: "Full Stack Web Developer",
    locationName: "Worldwide",
    salaryCurrency: "IDR",
    salaryMin: 10_000_000,
    salaryMax: 20_000_000,
    salaryCategory: "monthly",
    createdAt: new Date("25 April 2022"),
    updatedAt: new Date("27 April 2022"),
    jobDescription: "<p>Paragraph 1</p><p>Paragraph 2</p>",
    applyUrl: "https://example.com",
  },
  {
    jobId: "ab03f78e-226d-4ed5-bcf6-499b683600a9",
    companyName: "CodePolitan",
    companyLogoUrl: "https://logo.clearbit.com/codepolitan.com",
    jobTitle: "PHP Developer",
    locationName: "Bandung, Indonesia",
    salaryCurrency: "IDR",
    salaryMin: 10_000_000,
    salaryMax: 20_000_000,
    salaryCategory: "monthly",
    createdAt: new Date("25 July 2022"),
    updatedAt: new Date("28 July 2022"),
    jobDescription: "<p>Paragraph 1</p><p>Paragraph 2</p>",
    applyUrl: "https://example.com",
  },
];

export function getJobs() {
  return dataJobPosts;
}

export function getJob(jobId: string) {
  return dataJobPosts.find((job) => job.jobId === jobId);
}
