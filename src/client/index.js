import { handleSubmit } from "./js/formHandler";
import { checkForName } from "./js/nameChecker";
import { checkUrl } from "./js/urlChecker";
import { postData } from "./js/postData";
import { importedData } from "./js/importdeData";
import { updateUI } from "./js/updateUI";

// Style files
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

export {
  handleSubmit,
  checkForName,
  checkUrl,
  postData,
  importedData,
  updateUI,
};
