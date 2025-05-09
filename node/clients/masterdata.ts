import { InstanceOptions, IOContext, JanusClient } from "@vtex/api";

export default class MasterDataClient extends JanusClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        ...options?.headers,
        "X-VTEX-API-AppKey": "vtexappkey-royalcyber-SWNKYK",
        "X-VTEX-API-AppToken":
          "ECLJKTHLDICPOGJHEHJHHKJKURCYSYHLSFLZSVDMDLRITTEUBXWIATSIAVQAHGNLGDGZRHUCZHIKWCEAMNWUILOBQHWNTRDASMSCVHFQIHUMGFLUTBLJPXONHSAQPDEE",
      },
    });
  }

  public async getQuotes(): Promise<Quote[]> {
    try {
      console.log("Attempting to fetch quotes from MasterData");
      console.log("Auth token available:", !!this.context.authToken);

      return this.http.get(
        `https://royalcyber.vtexcommercestable.com.br/api/dataentities/quotes/scroll?_fields=_all`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.error("Error in MasterData client:", error);
      throw error;
    }
  }
}

export interface Quote {
  id: string;
  customerName: string;
  email: string;
  message: string;
  createdAt: string;
}
