import { thousand } from './format';

const regexAlphabet = /[^a-zA-Z ]+/g;
const regexAlphanumeric = /[^a-zA-Z0-9]+/g;
const regexAlphanumericWithSpecialCharacter = /[^a-zA-Z0-9.,/ ]*$/g;
const regexNumber = /[^0-9]+/g;
const regexNumberSpecial = /[^0-9,.]+/g;
const regexNoSpace = /\s/g;
const regexWebsite = /[^a-zA-Z0-9./:-]+/g;
const regexSiup = /[^a-zA-Z0-9./-]+/g;

export const alphabet = (value) => (
  value && value.replace(regexAlphabet, '')
);

export const alphanumeric = (value) => (
  value && value.replace(regexAlphanumeric, '')
);

export const AlphanumericWithSpecialCharacter = (value) => (
  value && value.replace(regexAlphanumericWithSpecialCharacter, '')
);

export const number = (value) => (
  value && value.replace(regexNumber, '')
);

export const numberKarakter = (value) => (
  value && value.replace(regexNumberSpecial, '')
);

export const noSpace = (value) => (
  value && value.replace(regexNoSpace, '')
);

export const siup = (value) => (
  value && value.replace(regexSiup, '')
);

export const thousandSeparator = (value) => (
  value && thousand(value.replace(/[^0-9]+/g, ''))
);

export function textLowerCase(value) {
  return value && value.toLowerCase();
}

export const Website = (value) => (
  value && value.replace(regexWebsite, '')
);
