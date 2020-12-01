import { combineReducers } from "redux";

import application from "./application";
import design from "./design";
import typography from "./typography";
import tooltip from "./tooltip";

const reducer = combineReducers({
  application,
  design,
  typography,
  tooltip
})

export default reducer;