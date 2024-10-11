import http from "../utils/http"

export const search = () => http.get('api/v1/chapters/search');

export const detail = (id) => http.get('api/v1/chapters/get-by-id/' + id);
