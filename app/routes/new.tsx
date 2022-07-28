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

      <form className="form-new-job" method="post" action="/new">
        <fieldset>
          <label htmlFor="companyName">Company Name</label>
          <input name="companyName" type="text" placeholder="PT ABC" required />
        </fieldset>

        <fieldset>
          <label htmlFor="jobTitle">Job Title</label>
          <input
            name="jobTitle"
            type="text"
            placeholder="Web Developer"
            required
          />
        </fieldset>

        <input className="button" type="submit" value="Post Job" />
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
        <button onClick={handleReload} className="button">
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
        <button className="button">Try Again</button>
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
