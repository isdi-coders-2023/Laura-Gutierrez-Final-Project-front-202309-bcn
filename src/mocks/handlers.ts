import { http, HttpResponse } from "msw";
import { plantsMock } from "./plantsMock";

const urlApi = import.meta.env.VITE_API_URL;

const handler = [
  http.get(`${urlApi}/plants`, () => {
    return HttpResponse.json(plantsMock);
  }),
];

export default handler;
