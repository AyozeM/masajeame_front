import axios from "axios";
import { environment } from "../config/environment";

export class BookingService {

  static getServices() {
    return axios.get(`${environment.serverUri}/booking`);
  }
}