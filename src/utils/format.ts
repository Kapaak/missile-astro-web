import parsePhoneNumberFromString from "libphonenumber-js";

export const formatLocalePrice = (price: number) => {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    maximumFractionDigits: 0,
  }).format(price);
};

export function formatPhoneNumber(phoneNumber: string) {
  const parsedPhoneNumber = parsePhoneNumberFromString(phoneNumber, "CZ");
  if (parsedPhoneNumber) {
    return parsedPhoneNumber.formatInternational();
  }

  return phoneNumber;
}
