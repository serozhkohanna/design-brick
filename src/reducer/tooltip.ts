import { SET_TOOLTIP, SHIFT_TOOLTIP } from "../constants/constants";

const initialState = {
  tooltips: []
}

export default function tooltip(state = initialState, action) {
  switch (action.type) {
	case SET_TOOLTIP:
	  return {
	    ...state, tooltips: [...state.tooltips, action.payload]
	  }
	case SHIFT_TOOLTIP:
	  return {
		...state, tooltips: state.tooltips.slice(1, -1)
	  }
  }
  return state;
}