import { ExternalClient, InstanceOptions, IOContext, } from "@vtex/api";

export default class MasterDataClient extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(`http://royalcyber.vtexcommercestable.com.br/api/dataentities/`, context, {
      ...options,
      headers: {
        
        "X-VTEX-API-AppKey": "vtexappkey-royalcyber-SWNKYK",
        "X-VTEX-API-AppToken":"ECLJKTHLDICPOGJHEHJHHKJKURCYSYHLSFLZSVDMDLRITTEUBXWIATSIAVQAHGNLGDGZRHUCZHIKWCEAMNWUILOBQHWNTRDASMSCVHFQIHUMGFLUTBLJPXONHSAQPDEE",
      },
    });
  }

  public async getQuotes(): Promise<any> {
    return this.http.get("quotes/scroll?_size=10&_fields=_all")
  }

  public async getQuotesBySeller(sellerId?: string): Promise<any> {
    return this.http.get("quotes/scroll?_size=10&_fields=_all")
  }
}

export interface Quote {
  id: string;
  customerName: string;
  email: string;
  message: string;
  createdAt: string;
}
