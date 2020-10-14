import { Design } from "../constants/interfaces";

const initialState: Design = {
  name: 'Classy',
  font: {
	name: 'Merriweather',
	link: 'https://fonts.googleapis.com/css2?family=Merriweather'
  },
  colors: {
	bodyColor: '#444444',
	palette: ['#00539C', '#EEA47F']
  }
}

export default function design(state = initialState) {
  return state;
}