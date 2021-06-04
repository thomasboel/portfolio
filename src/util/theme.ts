export const colors = {
  purple: '#541388',
  lightPurple: '#A288E3',
  red: '#DE3C4B',
  black: '#020202',
  white: '#E2E2E2'
};

export const sizes = {
  uhd: 1980,
  widescreen: 1366,
  desktop: 1024,
  tablet: 768,
}

export const media = (size: number) => (style: TemplateStringsArray | string) => `@media only screen and (min-width: ${size}px) { ${style} }`;