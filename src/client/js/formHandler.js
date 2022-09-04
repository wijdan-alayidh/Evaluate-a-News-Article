import { updateUI } from "./updateUI";

// Main function that will deal with and organize all the processes

function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let url = document.getElementById("url").value;

  const checkUrlResult = Client.checkUrl(url);
  if (checkUrlResult) {
    console.log("::: Form Submitted :::");
    Client.postData("http://localhost:8081/analysis", { url: url }).then(
      (data) => {
        Client.importedData(data).then((data) => {
          updateUI(data);
        });
      }
    );
  } else {
    alert("Please input correct url for the article");
  }
}

export { handleSubmit };
