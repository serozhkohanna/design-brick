interface Font {
  name: string,
  link: string
}

interface Colors {
  bodyColor: string,
  palette: string[]
}

export interface Design {
  id: number,
  name: string,
  font: Font,
  colors: Colors
}

export interface Typography {
  headline: object;
  headlineSecond: object;
  subheadline: object;
  textMuted: object;
  text: object;
}