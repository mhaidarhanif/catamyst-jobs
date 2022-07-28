import { ActionArgs, redirect } from "@remix-run/node";
import { useCatch } from "@remix-run/react";
import { createJob, JobFormData } from "~/data/jobs";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const jobFormData: JobFormData = {
    companyName: formData.get("companyName") as string,
    jobTitle: formData.get("jobTitle") as string,
    companyLogoUrl: formData.get("companyLogoUrl") as string,
    jobDescription: formData.get("jobDescription") as string,
    locationName: formData.get("locationName") as string,
    salaryMin: Number(formData.get("salaryMin")),
    salaryMax: Number(formData.get("salaryMax")),
    salaryCurrency: formData.get("companyLogoUrl") as string,
    salaryCategory: formData.get("salaryCategory") as string,
    applyUrl: formData.get("companyLogoUrl") as string,
  };

  console.info({ jobFormData });

  const job = await createJob(jobFormData);

  if (!job._id) {
    console.log({ job });
    return null;
  }

  return redirect(`/jobs/${job._id}`);
}

export default function NewJobPost() {
  return (
    <div>
      <header className="mb-5">
        <h1 className="text-3xl font-bold">Post New Job</h1>
      </header>

      <form
        method="post"
        action="/new"
        className="p-2 max-w-xl flex flex-col gap-2"
      >
        <fieldset className="flex flex-col">
          <label htmlFor="companyName">Company Name</label>
          <input
            name="companyName"
            type="text"
            placeholder="PT ABC"
            className="border p-2"
            required
          />
        </fieldset>

        <fieldset className="flex flex-col">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            name="jobTitle"
            type="text"
            placeholder="Web Developer"
            className="border p-2"
            required
          />
        </fieldset>

        <input
          type="submit"
          value="Post Job"
          className="bg-teal-500 text-white rounded-md p-2"
        />
      </form>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  function handleReload() {
    window.location.reload();
  }

  return (
    <div>
      <header className="mb-5">
        <h1 className="text-3xl font-bold">Failed to Post New Job</h1>
      </header>

      <main>
        <button
          onClick={handleReload}
          className="bg-teal-500 text-white rounded-md p-2"
        >
          Try Again
        </button>
      </main>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <header className="mb-5">
        <h1 className="text-3xl font-bold">Failed to Post New Job</h1>
        <h2>Caught an error</h2>
      </header>

      <main>
        <button>Try Again</button>
      </main>

      <footer>
        <p>Status: {caught.status}</p>
        <pre>
          <code>{JSON.stringify(caught.data, null, 2)}</code>
        </pre>
      </footer>
    </div>
  );
}
