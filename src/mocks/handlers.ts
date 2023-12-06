import { http, HttpResponse } from "msw";
import { plantsMock } from "../store/features/plants/mocks/plantsMock";

const urlApi = import.meta.env.VITE_API_URL;

const handler = [
  http.get(`${urlApi}/plants`, async () => {
    return HttpResponse.json({ plants: plantsMock });
  }),
  http.delete(`${import.meta.env.VITE_API_URL}/plants/:_id`, () => {
    return HttpResponse.json({});
  }),
];

export const errorHandlers = [
  http.get(`${urlApi}/plants`, async () => {
    HttpResponse.error();
  }),
  http.delete(`${urlApi}/plants/:_id`, async () => {
    HttpResponse.error();
  }),
];

export default handler;
