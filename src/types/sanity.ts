export type AboutMeExperience = {
  from: string;
  to: string;
  title: string;
};

export type AboutMe = {
  description: any;
  experiences: AboutMeExperience[];
};
