import axios from "axios";
import IContact from "../interfaces/IContact";

export default class HttpService {
  get<T>(url: string) {
    const controller = new AbortController();
    const request = axios.get<T>(url, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }

  post<T>(url: string, payload: IContact) {
    return axios.post<T>(url, payload);
  }

  put(url: string, payload: IContact) {
    return axios.put(url, payload);
  }

  delete(url: string) {
    return axios.delete(url);
  }
}
