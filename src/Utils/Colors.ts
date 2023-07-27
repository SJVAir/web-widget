export interface PMValueColor {
  min: number,
  color: string;
}

export const Colors = {
  green: "#00e400",
  yellow: "#ffff00",
  orange: "#ff7e00",
  red: "#ff0000",
  purple: "#8f3f97",
  maroon: "#7e0023",
  white: "#ffffff",
  gray: "#969696",
  black: "#000000",
  blue: "#0000FF",
  darkBlue: "#000033",
  vividBlue: "#00ccff",
} as const;

export const pmValueColors: Array<PMValueColor> = [
  {min: -Infinity, color: Colors.green},
  {min: 12, color: Colors.yellow},
  {min: 35, color: Colors.orange},
  {min: 55, color: Colors.red},
  {min: 150, color: Colors.purple},
  {min: 250, color: Colors.maroon}
];


export function darkModeEnabled(): boolean {
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}
