 
export const ALPHABET_REGEX = RegExp(/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/i);
export const EMAIL_REGEX = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
export const PASSWORD_REGEX = RegExp(/^[a-zA-Z0-9]*$/i);
export const PASSWORD_VALUE_REGEX = RegExp(/^[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))*$/i);
export const ALLTYPESEGEX=RegExp(/^[^\s].+[^\s]$/i);
export const NUMBER_PHONE=RegExp(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
export const ALPHANUMERIC=RegExp(/^[a-zA-Z0-9\-_]{0,40}$/i);
export const PASSWORD_VALUE_REGEX_SPECIAL=RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i);
export const NUMBER_ONLY=RegExp(/^\d*[0-9](|.\d*[0-9])?$/i)
export const NUMBER_REGEXONLY=RegExp(/^[0-9]+(\.([0-9]{1,50})?)?$/)
