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
];
