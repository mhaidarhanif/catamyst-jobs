const jobFormElement = document.querySelector("#job-form");

jobFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(jobFormElement);

  const jobDetail = {
    companyName: formData.get("company-name"),
    jobTitle: formData.get("job-title"),
  };

  console.log(jobDetail);
  window.alert(JSON.stringify(jobDetail));
});
