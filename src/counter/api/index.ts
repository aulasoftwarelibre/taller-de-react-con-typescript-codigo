import axios from "axios";

export const readCounter = () => axios.get("http://localhost:4000/counters/1");

export const updateCounter = (value: number) =>
  axios.put("http://localhost:4000/counters/1", { value });
