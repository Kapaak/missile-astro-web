import { type SanityImageWithAssetStub } from "@sanity/image-url/lib/types/types";

export type SanityPricingOption = {
  title: string;
  pricingLengths: SanityPricingLength[];
};

export type SanityPricingLength = {
  _key: string;
  title: number;
  firstPackage: {
    title: string;
    description: string[];
    price: number;
    lectureCount: number;
  };
  secondPackage: {
    title: string;
    description: string[];
    price: number;
    lectureCount: number;
  };
  thirdPackage: {
    title: string;
    description: string[];
    price: number;
    lectureCount: number;
  };
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

export type SanityAboutMeExperience = {
  from: string;
  to: string;
  title: string;
  image: SanityImage;
};

export type SanityAboutMe = {
  description: any;
  experiences: SanityAboutMeExperience[];
  image: SanityImage;
};
