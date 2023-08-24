import ApiEndpoints from "../common/apis/ApiEndpoints";
import IContact from "../interfaces/IContact";
import IContactCard from "../interfaces/IContactCard";
import HttpService from "./HttpService";

const baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

export default class ContactService {
  private httpService;
  private URL;

  constructor() {
    this.httpService = new HttpService();
    this.URL = baseURL + ApiEndpoints.ContactsEndpoint;
  }

  getCards() {
    const cardsURL = baseURL + ApiEndpoints.CardsEndpoint;
    return this.httpService.get<IContactCard[]>(cardsURL);
  }

  get(id: number) {
    return this.httpService.get<IContact>(this.URL + id);
  }

  update(contact: IContact) {
    return this.httpService.put(this.URL + contact.id, contact);
  }

  create(contact: IContact) {
    return this.httpService.post<IContact>(this.URL, contact);
  }

  delete(id: number) {
    return this.httpService.delete(this.URL + id);
  }
}
