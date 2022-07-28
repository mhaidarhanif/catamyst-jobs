import { axiosInstance } from "~/libs/axios";

export type Job = {
  _id: string;
  companyName: string;
  companyLogoUrl?: string;
  jobTitle: string;
  jobDescription: string;
  locationName: string;
  salaryMin: number;
  salaryMax: number;
  salaryCurrency: {
    value: string;
  };
  salaryCategory: {
    value: string;
  };
  applyUrl: string;
  createdAt: Date;
  updatedAt: Date;
};

export async function getJobs() {
  const response = await axiosInstance.get("/jobs");
  return await response.data;
}

// export function getJob(jobId: string) {
//   return job;
// }
