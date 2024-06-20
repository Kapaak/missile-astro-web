import { type SanityImageWithAssetStub } from "@sanity/image-url/lib/types/types";

export type SanityPricingOption = {
  title: string;
  pricingLengths: SanityPricingLength[];
};

export type SanityLecture = {
  id?: string;
  price?: number;
  count?: number;
  courseName?: string;
  courseSlug?: string;
  courseOrder?: number;
  description?: string[];
  packageValue?: 1 | 2 | 3;
  time?: string;
};

export type SanityCourse = {
  id?: string;
  name?: number;
  slug?: string;
  order?: number;
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

export type SanityFile = SanityImageWithAssetStub;

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

export type SanityUploadDocument = {
  file: SanityFile;
};

export type SanityContact = {
  fullName: string;
  address: string;
  email: string;
  phone: string;
  identificationNumber: string;
  taxIdentificationNumber: string;
};
