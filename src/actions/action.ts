import { REMOVE_TOOLTIP, SET_TOOLTIP, SHIFT_TOOLTIP } from "../constants/constants";

export const setTooltip = payload => ({
  type: SET_TOOLTIP,
  payload
})

export const shiftTooltip = payload => ({
  type: SHIFT_TOOLTIP,
  payload
})

export const removeTooltip = payload => ({
  type: REMOVE_TOOLTIP,
  payload
})