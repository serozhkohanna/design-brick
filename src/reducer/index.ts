import { combineReducers } from "redux";

import application from "./application";
import design from "./design";

const reducer = combineReducers({
  application,
  design
})

export default reducer;