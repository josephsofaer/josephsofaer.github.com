// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import { type Agent } from './_shims/index';
import * as Uploads from './uploads';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['JOSEPHSOFAER_BEARER_TOKEN'].
   */
  bearerToken?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['JOSEPHSOFAER_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/** API Client for interfacing with the Josephsofaer API. */
export class Josephsofaer extends Core.APIClient {
  bearerToken: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Josephsofaer API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['JOSEPHSOFAER_BEARER_TOKEN'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['JOSEPHSOFAER_BASE_URL'] ?? https://api.bringyour.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('JOSEPHSOFAER_BASE_URL'),
    bearerToken = Core.readEnv('JOSEPHSOFAER_BEARER_TOKEN'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.JosephsofaerError(
        "The JOSEPHSOFAER_BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Josephsofaer client with an bearerToken option, like new Josephsofaer({ bearerToken: 'My Bearer Token' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      ...opts,
      baseURL: baseURL || `https://api.bringyour.com`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });
    this._options = options;

    this.bearerToken = bearerToken;
  }

  stats: API.Stats = new API.Stats(this);
  auth: API.Auth = new API.Auth(this);
  network: API.Network = new API.Network(this);
  preferences: API.Preferences = new API.Preferences(this);
  feedback: API.Feedback = new API.Feedback(this);
  wallet: API.Wallet = new API.Wallet(this);
  subscription: API.Subscription = new API.Subscription(this);
  devices: API.Devices = new API.Devices(this);
  device: API.Device = new API.Device(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  static Josephsofaer = this;

  static JosephsofaerError = Errors.JosephsofaerError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export const {
  JosephsofaerError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Josephsofaer {
  export import RequestOptions = Core.RequestOptions;

  export import Stats = API.Stats;

  export import Auth = API.Auth;
  export import CodeCreate = API.CodeCreate;
  export import CodeLogin = API.CodeLogin;
  export import NetworkCheck = API.NetworkCheck;
  export import NetworkCreate = API.NetworkCreate;
  export import AuthCodeCreateParams = API.AuthCodeCreateParams;
  export import AuthCodeLoginParams = API.AuthCodeLoginParams;
  export import AuthNetworkCheckParams = API.AuthNetworkCheckParams;
  export import AuthNetworkCreateParams = API.AuthNetworkCreateParams;

  export import Network = API.Network;
  export import AuthClient = API.AuthClient;
  export import Clients = API.Clients;
  export import CreateProviderSpec = API.CreateProviderSpec;
  export import FindLocations = API.FindLocations;
  export import FindProviderLocations = API.FindProviderLocations;
  export import FindProviders = API.FindProviders;
  export import FindProviders2 = API.FindProviders2;
  export import ProviderLocations = API.ProviderLocations;
  export import RemoveClient = API.RemoveClient;
  export import NetworkAuthClientParams = API.NetworkAuthClientParams;
  export import NetworkCreateProviderSpecParams = API.NetworkCreateProviderSpecParams;
  export import NetworkFindLocationsParams = API.NetworkFindLocationsParams;
  export import NetworkFindProviderLocationsParams = API.NetworkFindProviderLocationsParams;
  export import NetworkFindProvidersParams = API.NetworkFindProvidersParams;
  export import NetworkFindProviders2Params = API.NetworkFindProviders2Params;
  export import NetworkRemoveClientParams = API.NetworkRemoveClientParams;

  export import Preferences = API.Preferences;
  export import SetPreferences = API.SetPreferences;
  export import PreferenceSetPreferencesParams = API.PreferenceSetPreferencesParams;

  export import Feedback = API.Feedback;
  export import SendFeedback = API.SendFeedback;
  export import FeedbackSendFeedbackParams = API.FeedbackSendFeedbackParams;

  export import Wallet = API.Wallet;
  export import CircleInit = API.CircleInit;
  export import CircleTransferOut = API.CircleTransferOut;
  export import ValidateAddress = API.ValidateAddress;
  export import WalletBalanceResponse = API.WalletBalanceResponse;
  export import WalletCircleTransferOutParams = API.WalletCircleTransferOutParams;
  export import WalletValidateAddressParams = API.WalletValidateAddressParams;

  export import Subscription = API.Subscription;
  export import CheckBalanceCode = API.CheckBalanceCode;
  export import CreatePaymentID = API.CreatePaymentID;
  export import RedeemBalanceCode = API.RedeemBalanceCode;
  export import SubscriptionCheckBalanceCodeParams = API.SubscriptionCheckBalanceCodeParams;
  export import SubscriptionCreatePaymentIDParams = API.SubscriptionCreatePaymentIDParams;
  export import SubscriptionRedeemBalanceCodeParams = API.SubscriptionRedeemBalanceCodeParams;

  export import Devices = API.Devices;
  export import AddDevice = API.AddDevice;
  export import AdoptStatus = API.AdoptStatus;
  export import ConfirmAdopt = API.ConfirmAdopt;
  export import ConfirmShare = API.ConfirmShare;
  export import CreateAdoptCode = API.CreateAdoptCode;
  export import CreateShareCode = API.CreateShareCode;
  export import RemoveAdoptCode = API.RemoveAdoptCode;
  export import SetName = API.SetName;
  export import SetProvide = API.SetProvide;
  export import ShareStatus = API.ShareStatus;
  export import DeviceAddParams = API.DeviceAddParams;
  export import DeviceConfirmShareParams = API.DeviceConfirmShareParams;
  export import DeviceCreateAdoptCodeParams = API.DeviceCreateAdoptCodeParams;
  export import DeviceCreateShareCodeParams = API.DeviceCreateShareCodeParams;
  export import DeviceShareStatusParams = API.DeviceShareStatusParams;

  export import Device = API.Device;
  export import RemoveAssociation = API.RemoveAssociation;
  export import SetAssociationName = API.SetAssociationName;
  export import DeviceAdoptStatusParams = API.DeviceAdoptStatusParams;
  export import DeviceConfirmAdoptParams = API.DeviceConfirmAdoptParams;
  export import DeviceRemoveAdoptCodeParams = API.DeviceRemoveAdoptCodeParams;
  export import DeviceRemoveAssociationParams = API.DeviceRemoveAssociationParams;
  export import DeviceSetAssociationNameParams = API.DeviceSetAssociationNameParams;
  export import DeviceSetNameParams = API.DeviceSetNameParams;
  export import DeviceSetProvideParams = API.DeviceSetProvideParams;

  export import Balance = API.Balance;
}

export default Josephsofaer;
