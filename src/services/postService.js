//import axios
import axios from "axios";

//create a instance of Axios.
//It will have baseURL - where BaseURL is always the URL where the API lives
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

//Now we will the functions (for get, post, delete ..)
const getPosts = () => api.get("/posts");

export { getPosts };
