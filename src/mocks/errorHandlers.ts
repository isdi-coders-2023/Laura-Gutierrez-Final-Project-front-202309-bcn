import { http, HttpResponse } from "msw";

const apiURL = import.meta.env.VITE_API_URL;

export const errorHandlers = [
  http.get(`${apiURL}/plants`, async () => {
    HttpResponse.error();
  }),
  http.delete(`${apiURL}/plants/:_id`, async () => {
    HttpResponse.error();
  }),
];
