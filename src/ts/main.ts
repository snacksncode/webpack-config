import "../scss/main.scss";
import testUtil from "./utils/testUtil";

const testElement = document.querySelector(".typescript-test") as HTMLHeadingElement;
testElement.textContent = `${testUtil("TypeScript")} :3`;
testElement.classList.add("color-success");
