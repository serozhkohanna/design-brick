import { SET_TOOLTIP, SHIFT_TOOLTIP, REMOVE_TOOLTIP } from "../constants/constants";

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
	case REMOVE_TOOLTIP:
	  return {
	    ...state,
		tooltips: state.tooltips.filter((item, i) => {
		  return i !== action.payload
		})
	  }
  }
  return state;
}