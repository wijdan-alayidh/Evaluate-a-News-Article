/* This Function is used to organize the data received
  from the API and use just the data needed from the API
*/
const importedData = async (data) => {
  const analysis = await data;
  try {
    if (data.status.code === "0") {
      const analysisData = {
        agreement: data.agreement,
        polarity: data.score_tag,
        subjectivity: data.subjectivity,
        irony: data.irony,
        confidence: data.confidence,
      };
      console.log(analysisData);
      return analysisData;
    } else {
      alert(data.status.msg);
    }
  } catch (error) {
    console.log(error);
  }
};

export { importedData };
