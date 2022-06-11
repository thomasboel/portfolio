interface ProjectLink {
  url: string;
  icon: (color: string) => JSX.Element;
}

export interface ProjectData {
  title: string;
  description: string;
  longDescription?: string;
  technologies: Array<string>;
  links: Array<ProjectLink>;
}