import { Typography } from "../constants/interfaces";

const initialState: Typography = {
  headline: {
	lineHeight: 1.2,
	fontWeight: 'bold',
	fontSize: {
	  desktop: '48px',
	  mobile: '35px'
	}
  },
  headlineSecond: {
	lineHeight: 1.2,
	fontWeight: 'bold',
	fontSize: {
	  desktop: '36px',
	  mobile: '25px'
	}
  },
  subheadline: {
	lineHeight: 1.5,
	fontWeight: 'normal',
	fontSize: {
	  desktop: '24px',
	  mobile: '20px'
	}
  },
  textMuted: {
	lineHeight: 1.5,
	fontWeight: 'bold',
	fontSize: {
	  desktop: '18px',
	  mobile: '16px'
	}
  },
  text: {
	lineHeight: 1.5,
	fontWeight: 'normal',
	fontSize: {
	  desktop: '14px',
	  mobile: '14px'
	}
  }
}

export default function typography(state = initialState, action) {
  return state;
}