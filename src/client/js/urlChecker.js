// This function is used to check if the user inputs a valid URL or not

function checkUrl(string) {
  let url;

  // STEP 1: Check if input is URL
  try {
    url = new URL(string);
  } catch (error) {
    console.log("invalid url");
    return false;
  }

  // STEP 2: Check The URL protocol
  if (url.protocol === "http:" || url.protocol === "https:") {
    console.log(`valid url ${url}`);
    return true;
  } else {
    console.log("invalid url protocol");
    return false;
  }
}

export { checkUrl };
