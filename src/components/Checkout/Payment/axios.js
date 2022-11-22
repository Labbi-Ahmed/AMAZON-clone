import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-challenge-45921.cloudfunctions.net/api",
});

export default instance;
