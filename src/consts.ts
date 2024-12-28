import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "啊这.的博客",
  DESCRIPTION: "某个摸鱼王啊这.的博客.",
  EMAIL: "me@azhegod.site",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "主页 | 某个摸鱼王啊这.的博客.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "文章 | 某个摸鱼王啊这.的博客.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/TheAzheGod",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/azheea",
  },
];
