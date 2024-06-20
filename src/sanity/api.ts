import type {
  SanityAboutMe,
  SanityContact,
  SanityCourse,
  SanityLecture,
  SanityPricingOption,
  SanityUploadDocument,
} from "./types";
import { sanityClient } from "sanity:client";

export async function getHome(): Promise<SanityAboutMe> {
  const query = `*[_type == "home"][0]{description,experiences}`;

  const home: SanityAboutMe = await sanityClient.fetch(query);

  return home;
}

export async function getPricingOptions(): Promise<SanityPricingOption[]> {
  const query = `*[_type == "pricing"]|order(order)`;

  const pricingOptions: SanityPricingOption[] = await sanityClient.fetch(query);

  return pricingOptions;
}

export async function getLectures(): Promise<SanityLecture[]> {
  const query = `*[_type == "lecture"]{"id":_id,count,"packageValue":name,time,price,"courseSlug":course->.slug.current,"courseName":course->.name,"courseOrder":course->.order,description}`;

  const pricingOptions: SanityLecture[] = await sanityClient.fetch(query);

  return pricingOptions;
}

export async function getCourses(): Promise<SanityCourse[]> {
  const query = `*[_type == "course"]{"id":_id,"slug":slug.current,name,order}|order(order)`;

  const pricingOptions: SanityLecture[] = await sanityClient.fetch(query);

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

export async function getSingleContact(): Promise<SanityContact> {
  const query = `*[_type == "contact"][0]{fullName,address,email,phone,identificationNumber,taxIdentificationNumber}`;

  const singleContact: SanityContact = await sanityClient.fetch(query);

  return singleContact;
}
