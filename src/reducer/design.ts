import { Design } from "../constants/interfaces";
import designData from '../design.json';

const initialState: Design[] = designData;

export default function design(state = initialState) {
  return state;
}