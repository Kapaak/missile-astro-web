import { type SanityImageWithAssetStub } from "@sanity/image-url/lib/types/types";

export type AboutMeExperience = {
  from: string;
  to: string;
  title: string;
};

export type AboutMe = {
  description: any;
  experiences: AboutMeExperience[];
  image: SanityImage;
};

export type SanityImage = SanityImageWithAssetStub & {
  asset: {
    metadata: {
      lqip: string;
      dimensions: {
        width: number;
        height: number;
      };
    };
  };
};
