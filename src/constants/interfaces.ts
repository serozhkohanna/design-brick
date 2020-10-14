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