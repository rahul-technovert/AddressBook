import IRegExp from "../../interfaces/IRegexp";

export const InputLength = {
  Name: {
    Min: 2,
    Max: 50,
  },

  Address: {
    Min: 15,
    Max: 150,
  },
};

export const Regexp: IRegExp = {
  email: /^[a-zA-Z\d]*@gmail.com$/,
  website: /^www\.[a-zA-Z\d]*\.com$/,
  name: /^[a-zA-Z\s]*$/,
  number: /^[0-9]{10}$/,
  address: /^[a-zA-Z\d\s-,]*$/,
};
