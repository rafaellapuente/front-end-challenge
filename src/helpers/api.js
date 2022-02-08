import axios from "axios";

const ApiCat = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default ApiCat;
