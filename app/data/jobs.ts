import { axiosInstance } from "~/libs/axios";

export type Job = {
  _id?: string;
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
  createdAt?: string;
  updatedAt?: string;
};

export type JobFormData = {
  companyName: string;
  companyLogoUrl?: string;
  jobTitle: string;
  locationName: string;
  applyUrl: string;
  salaryCurrency: "IDR" | "USD" | string;
  salaryCategory: "hourly" | "monthly" | "yearly" | string;
  salaryMin: number;
  salaryMax: number;
  jobDescription: string;
};

export async function getJobs() {
  const response = await axiosInstance.get("/jobs");
  return await response.data;
}

export async function getJob(jobId: string) {
  const response = await axiosInstance.get(`/jobs/${jobId}`);
  return await response.data;
}

export async function createJob(job: JobFormData) {
  const response = await axiosInstance.post(`/jobs`, job);
  return await response.data;
}
