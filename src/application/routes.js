import Home from "./components/Home";
import FirstPage from "./components/FirstPage";
import NotFoundPage from "./components/NotFoundPage";

export default {
  "/": Home,
  "/first-page": FirstPage,
  "*": NotFoundPage
};
