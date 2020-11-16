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

interface DeviceMode {
  desktop: string;
  mobile: string;
}

interface TypographyProperties {
  lineHeight: number;
  fontWeight: string;
  fontSize: DeviceMode
}

export interface Typography {
  headline: TypographyProperties;
  headlineSecond: TypographyProperties;
  subheadline: TypographyProperties;
  textMuted: TypographyProperties;
  text: TypographyProperties;
}