import { PlantsStructure } from "../types";

export const newPlantsMock: PlantsStructure[] = [
  {
    _id: "6566158cd11a3f8f1075c7a1",
    name: "Oregano",
    scientificName: "Origanum vulgare",
    use: "Culinary/Medicinal",
    properties:
      "Relieves headaches and throat aches. It's a natural constipation remedy. Relieves cough and asthma symptoms.",
    howToUse:
      "Use it in many savoury dishes as seasoning, also in sauces. You can consume oregano oil in capsules. ",
    imageUrl: "https://i.ibb.co/pxK6J2P/origano.webp",
    isPoisonous: false,
    habitat: "Grasslands, bushes, rocky areas.",
  },
  {
    _id: "6566158cd11a3f8f1075c7a2",
    name: "Salvia",
    scientificName: "Salvia Officinalis",
    use: "Medicinal",
    properties: "Antimigratory and  antiangiogenic effects",
    howToUse:
      "used for the treatment of different kinds of disorders including seizure, ulcers, gout, rheumatism, inflammation, dizziness, tremor, paralysis, diarrhea, and hyperglycemia.",
    imageUrl: "https://i.ibb.co/Bj0rNqq/Salvia-officinalis.webp",
    isPoisonous: false,
    habitat: "Mediterranean warm arid areas.",
  },
  {
    _id: "6566158cd11a3f8f1075c7a4",
    name: "Nutmeg",
    scientificName: "Myristica fragrans",
    use: "Culinary/Poison",
    properties:
      "Nutmeg is used for flavouring both sweet and savoury dishes. Whole nutmeg can also be ground at home using a grater.",
    howToUse:
      "Its a traditional ingredient in mulled cider, mulled wine, junket and eggnog. In Scotland, mace and nutmeg are usually both ingredients in haggis. In Italian cuisine, nutmeg is used as part of the stuffing for many regional meat-filled dumplings like tortellini, as well as for the traditional meatloaf. Nutmeg is a common spice for pumpkin pie and in recipes for other winter squashes, like baked acorn squash. In the Caribbean, nutmeg is often used in drinks, such as the Bushwacker, Painkiller, and Barbados rum punch.",
    imageUrl:
      "https://i.ibb.co/ZYW2tJj/cd03d3371d9adc84c1e7d53f2c3e19f1-spices-and-herbs-botanical-prints-1.webp",
    isPoisonous: true,
    habitat: "Indonesia.",
  },
];
