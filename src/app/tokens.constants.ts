export const TOKENS = [
  {
    name: "BERA",
    image:
      "https://as2.ftcdn.net/v2/jpg/07/48/40/61/1000_F_748406134_w9J37XFCMLDyT0nWXbCzTd89czAJXFu3.jpg",
    trend: "0",
  },
  {
    name: "HONEY",
    image:
      "https://as1.ftcdn.net/v2/jpg/05/69/24/54/1000_F_569245416_BErGinYgza2Cy4vBMcrCVoi5GAQhMckd.webp",
    trend: "0",
  },
  {
    name: "SPIDEY",
    image:
      "https://www.shutterstock.com/shutterstock/photos/2285982337/display_1500/stock-vector-spider-vector-for-logo-or-icon-drawing-elegant-minimalist-style-abstract-style-illustration-2285982337.jpg",
    trend: "+0.55",
  },
];

export const EXCHANGE_RATE_DISPLAY: { [key: string]: string } = {
  "BERA to HONEY": "1 BERA = 0.032 HONEY",
  "HONEY to BERA": "1 HONEY = 31.25 BERA",
  "BERA to SPIDEY": "1 BERA = 0.5 SPIDEY",
  "SPIDEY to BERA": "1 SPIDEY = 2 BERA",
  "SPIDEY to HONEY": "1 SPIDEY = 0.064 HONEY",
  "HONEY to SPIDEY": "1 HONEY = 15.625 SPIDEY",
};

export const EXCHANGE_RATE: { [key: string]: number } = {
  "BERA to HONEY": 0.032,
  "HONEY to BERA": 31.25,
  "BERA to SPIDEY": 0.5,
  "SPIDEY to BERA": 2,
  "SPIDEY to HONEY": 0.064,
  "HONEY to SPIDEY": 15.625,
};

export const DOLLARS_EXCHANGE: { [key: string]: number } = {
  BERA: 10000,
  HONEY: 312500,
  SPIDEY: 20000,
};
