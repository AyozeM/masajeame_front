import axios, { AxiosResponse } from "axios";
import { environment } from "../config/environment";

export abstract class GenericService {
  protected prefix!: string;
  protected getAll(): Promise<AxiosResponse<any[]>> {
    return axios.get(`${environment.serverUri}/${this.prefix}`);
  }

  protected getById(id: number | string): Promise<AxiosResponse> {
    return axios.get(`${environment.serverUri}/${this.prefix}/${id}`)
  }
}