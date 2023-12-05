import { http, HttpResponse } from "msw";
import { plantsMock } from "./plantsMock";

const urlApi = import.meta.env.VITE_API_URL;

const handler = [
  http.get(`${urlApi}/plants`, async () => {
    return HttpResponse.json({ plants: plantsMock });
  }),
  http.delete(
    `${import.meta.env.VITE_API_URL}/plants/6566158cd11a3f8f1075c7a1`,
    () => {
      return HttpResponse.json({});
    },
  ),
];

export default handler;
