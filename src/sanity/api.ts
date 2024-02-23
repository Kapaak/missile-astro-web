import type {
  SanityAboutMe,
  SanityPricingOption,
  SanityUploadDocument,
} from "./types";
import { sanityClient } from "sanity:client";

export async function getPricingOptions(): Promise<SanityPricingOption[]> {
  const query = `*[_type == "pricing"]|order(order)`;

  const pricingOptions: SanityPricingOption[] = await sanityClient.fetch(query);

  return pricingOptions;
}

export async function getAboutMe(): Promise<SanityAboutMe> {
  const query = `*[_type == "about"][0]{description,experiences[]{from,to,title,image{asset->{...,metadata}}},image{asset->{...,metadata}}}`;

  const aboutMe: SanityAboutMe = await sanityClient.fetch(query);

  return aboutMe;
}

export async function getSingleDocument(): Promise<SanityUploadDocument> {
  const query = `*[_type == "uploadDocument"][0]{file{asset->{url}}}`;

  const singleDocument: SanityUploadDocument = await sanityClient.fetch(query);

  return singleDocument;
}
