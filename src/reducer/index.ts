import { combineReducers } from "redux";

import application from "./application";
import design from "./design";
import typography from "./typography";

const reducer = combineReducers({
  application,
  design,
  typography
})

export default reducer;