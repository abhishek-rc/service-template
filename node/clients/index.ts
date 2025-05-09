import { IOClients } from "@vtex/api";
import MasterDataClient from "./masterdata";

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get masterData() {
    return this.getOrSet("masterData", MasterDataClient);
  }
}
