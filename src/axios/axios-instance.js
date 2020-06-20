import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "https://dev.technotackle.com/farming-company/admin/web/v1"
      : "https://travix-faran-todo.herokuapp.com/",
});

export default instance;
