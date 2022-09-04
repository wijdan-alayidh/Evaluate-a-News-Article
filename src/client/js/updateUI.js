// This function is used to check if the result passed is a JSON object

const checkObject = (input) => {
  const inputType = typeof input;
  if (inputType === "object") {
    const isObject = !Array.isArray(inputType) ? true : false;

    if (isObject) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

// This function is used to update the UI based on the result received from the API.

const updateUI = (object) => {
  // result container
  const resultContainer = document.querySelector("#results");
  // check object
  const isObject = checkObject(object) === true ? true : false;
  // Looping through the result to update dynamically UI based on keys and values received from the API.
  if (isObject === true && Object.keys.length !== 0) {
    // This is to remove previous results in case users submit multiple requests without refreshing the page.
    resultContainer.innerHTML = "";

    // Update UI steps
    for (const [key, value] of Object.entries(object)) {
      let row = document.createElement("div");
      let rowKey = document.createElement("span");
      let rowValue = document.createElement("span");

      row.setAttribute("class", `result-row`);

      rowKey.textContent = String(key) + " : ";
      rowKey.setAttribute("class", `result-row--name`);
      rowValue.textContent = String(value);
      rowValue.setAttribute("class", `result-row--value`);

      row.appendChild(rowKey);
      row.appendChild(rowValue);

      resultContainer.appendChild(row);
    }
  } else {
    alert(
      "Something went wrong: Make sure you input a valid URL for your article"
    );
  }
};

export { updateUI };
