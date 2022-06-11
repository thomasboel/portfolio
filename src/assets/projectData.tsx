import * as I from '../util/interfaces';

import { ExternalLinkIcon, GitHubIcon } from '../util/icons';

const projects: Array<I.ProjectData> = [
  {
    title: "PayShare",
    description: "Share your receipts, select who, what and how much. Keep track of the economy.",
    technologies: [ "React-Native", ".NET Core", "Postgres", "AWS", "Docker" ],
    links: [ 
      { url: "https://payshare.dk", icon: (color: string) => <ExternalLinkIcon color={color} /> }
    ]
  },
  {
    title: "Noodle",
    description: "Noodle event planner will help you create and communicate the schedule to any participants.",
    technologies: [ "React-Native", "Express", "MariaDB", "Docker" ],
    links: [ 
       
    ]
  },
  {
    title: "Presuno",
    description: "Presuno turns you and your smartphone into a complete TV crew! Live Streaming software.",
    technologies: [ "React", "React-Native", "Wowza", ".NET Core" ],
    links: [ 
      { url: "https://presuno.com", icon: (color: string) => <ExternalLinkIcon color={color} /> } 
    ]
  },
  {
    title: "Katalog",
    description: "Keep track and share diet/intolerance catalogs with your friends or the public!",
    technologies: [ "React-Native", "Express", "Postgres", "AWS", "Docker" ],
    links: [ 
      { url: "https://katalog.sikkerforskning.dk", icon: (color: string) => <ExternalLinkIcon color={color} /> } 
    ]
  },
  {
    title: "Portfolio Website",
    description: "Should you be interested, the code for this website has been pushed to GitHub 😃",
    longDescription: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
    technologies: [ "React with typescript ❤" ],
    links: [ 
      { url: "https://github.com/thomasboel/portfolio", icon: (color: string) => <GitHubIcon color={color} /> }
    ]
  }
];

export default projects;