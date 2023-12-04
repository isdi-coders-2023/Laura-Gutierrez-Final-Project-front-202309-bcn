import { http, HttpResponse } from "msw";
import { plantsMock } from "./plantsMock";

const urlApi = import.meta.env.VITE_API_URL;

const handler = [
  http.get(`${urlApi}/plants`, async () => {
    return HttpResponse.json({ plants: plantsMock });
  }),
];

export default handler;
