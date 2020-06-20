import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost/"
      : "https://travix-faran-todo.herokuapp.com/",
});

export default instance;
