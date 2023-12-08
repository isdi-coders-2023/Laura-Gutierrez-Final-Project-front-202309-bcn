import { http, HttpResponse } from "msw";
import { plantsMock } from "../store/features/plants/mocks/plantsMock";
import { newPlantsMock } from "../store/features/plants/mocks/newPlantsMock";

const urlApi = import.meta.env.VITE_API_URL;

const handler = [
  http.get(`${urlApi}/plants`, async () => {
    return HttpResponse.json({ plants: plantsMock });
  }),
  http.delete(`${import.meta.env.VITE_API_URL}/plants/:_id`, () => {
    return HttpResponse.json({});
  }),
  http.post(`${import.meta.env.VITE_API_URL}/plants/add`, () => {
    return HttpResponse.json({ plant: newPlantsMock[2] });
  }),
];

export const errorHandlers = [
  http.get(`${urlApi}/plants`, async () => {
    HttpResponse.error();
  }),
  http.delete(`${urlApi}/plants/:_id`, async () => {
    HttpResponse.error();
  }),
  http.post(`${urlApi}/plants/add`, () => HttpResponse.error()),
];

export default handler;
