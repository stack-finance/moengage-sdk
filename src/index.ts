import fetch from "node-fetch";

const MOENGAGE_BASE_URL = (dataCenter: string) =>
  `https://api-${dataCenter}.moengage.com/v1`;

export class MoEngage {
  private readonly apiId: string;
  private readonly apiKey: string;
  private readonly dataCenter: string;
  private readonly baseURL: string;

  constructor(apiId: string, apiKey: string, dataCenter: string) {
    this.apiId = apiId;
    this.apiKey = apiKey;
    if (!["01", "02", "03"].includes(dataCenter)) {
      throw new Error("Invalid datacenter provided.");
    }
    this.dataCenter = dataCenter;
    this.baseURL = MOENGAGE_BASE_URL(dataCenter);
  }

  addOrUpdateUser(payload: object) {
    return fetch(`${this.baseURL}/customer/${this.apiId}`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${this.apiId}:${this.apiKey}`).toString("base64")}`,
        "MOE-APPKEY": this.apiId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  addOrUpdateDevice(payload: object) {
    return fetch(`${this.baseURL}/device/${this.apiId}`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${this.apiId}:${this.apiKey}`).toString("base64")}`,
        "MOE-APPKEY": this.apiId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  triggerEvent(payload: object) {
    return fetch(`${this.baseURL}/event/${this.apiId}`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${this.apiId}:${this.apiKey}`).toString("base64")}`,
        "MOE-APPKEY": this.apiId,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }
}

export default { MoEngage };
