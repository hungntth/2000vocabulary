import http from "../utils/http"

export const search = () => http.get('api/v1/dictionary/search');
