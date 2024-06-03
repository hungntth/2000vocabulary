/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable prettier/prettier */
import Api from "./baseAPI/AuthorBaseApi";

class TodoApi {
   constructor() {
      this.url = "/categories";
   }

   getAll = () => {
      return Api.get(`${this.url}`);
   };
}


export default new TodoApi();