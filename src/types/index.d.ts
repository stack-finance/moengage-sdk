export class MoEngage {
  /**
   * @param {string} appId - API ID for the MoEngage account
   * @param {string} appKey - API secret for the MoEngage account
   * @param {string} dataCenter - Valid values - '01', '02', '03'
   */
  constructor(appId: string, appKey: string, dataCenter: string);

  /**
   * Method to add a new user or update an existing user.
   * @param {object} payload - An object which contains the JSON payload defined in the docs here: https://developers.moengage.com/hc/en-us/articles/4404674776724-Overview#request-body-0-5
   * @returns {Promise} A response promise(fetch promise) from the provider, if successful, the response will be in JSON format. Errors need to be handled separately.
   */
  addOrUpdateUser(payload: object): Promise<unknown>;

  /**
   * Method to add a new device or update an existing device for a user.
   * @param {object} payload - An object which contains the JSON payload defined in the docs here: https://developers.moengage.com/hc/en-us/articles/4404674776724-Overview#request-body-0-5
   * @returns {Promise} A response promise(fetch promise) from the provider, if successful, the response will be in JSON format. Errors need to be handled separately.
   */
  addOrUpdateDevice(payload: object): Promise<unknown>;

  /**
   * Method to trigger events for a given user.
   * @param {object} payload - An object which contains the JSON payload defined in the docs here: https://developers.moengage.com/hc/en-us/articles/4404674776724-Overview#request-body-0-5
   * @returns {Promise} A response promise(fetch promise) from the provider, if successful, the response will be in JSON format. Errors need to be handled separately.
   */
  triggerEvent(payload: object): Promise<unknown>;
}
