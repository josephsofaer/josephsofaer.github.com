// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AddDevice,
  AdoptStatus,
  ConfirmAdopt,
  ConfirmShare,
  CreateAdoptCode,
  CreateShareCode,
  DeviceAddParams,
  DeviceConfirmShareParams,
  DeviceCreateAdoptCodeParams,
  DeviceCreateShareCodeParams,
  DeviceShareStatusParams,
  Devices,
  RemoveAdoptCode,
  SetName,
  SetProvide,
  ShareStatus,
} from './resources/devices';
import { Feedback, FeedbackSendFeedbackParams, SendFeedback } from './resources/feedback';
import {
  AuthClient,
  Clients,
  CreateProviderSpec,
  FindLocations,
  FindProviderLocations,
  FindProviders,
  FindProviders2,
  Network,
  NetworkAuthClientParams,
  NetworkCreateProviderSpecParams,
  NetworkFindLocationsParams,
  NetworkFindProviderLocationsParams,
  NetworkFindProviders2Params,
  NetworkFindProvidersParams,
  NetworkRemoveClientParams,
  ProviderLocations,
  RemoveClient,
} from './resources/network';
import { PreferenceSetPreferencesParams, Preferences, SetPreferences } from './resources/preferences';
import {
  CheckBalanceCode,
  CreatePaymentID,
  RedeemBalanceCode,
  Subscription,
  SubscriptionCheckBalanceCodeParams,
  SubscriptionCreatePaymentIDParams,
  SubscriptionRedeemBalanceCodeParams,
} from './resources/subscription';
import {
  CircleInit,
  CircleTransferOut,
  ValidateAddress,
  Wallet,
  WalletBalanceResponse,
  WalletCircleTransferOutParams,
  WalletValidateAddressParams,
} from './resources/wallet';
import {
  Auth,
  AuthCodeCreateParams,
  AuthCodeLoginParams,
  AuthNetworkCheckParams,
  AuthNetworkCreateParams,
  CodeCreate,
  CodeLogin,
  NetworkCheck,
  NetworkCreate,
} from './resources/auth/auth';
import {
  Device,
  DeviceAdoptStatusParams,
  DeviceConfirmAdoptParams,
  DeviceRemoveAdoptCodeParams,
  DeviceRemoveAssociationParams,
  DeviceSetAssociationNameParams,
  DeviceSetNameParams,
  DeviceSetProvideParams,
  RemoveAssociation,
  SetAssociationName,
} from './resources/device/device';
import { Stats } from './resources/stats/stats';

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

/**
 * API Client for interfacing with the Josephsofaer API.
 */
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
  static DEFAULT_TIMEOUT = 60000; // 1 minute

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

Josephsofaer.Stats = Stats;
Josephsofaer.Auth = Auth;
Josephsofaer.Network = Network;
Josephsofaer.Preferences = Preferences;
Josephsofaer.Feedback = Feedback;
Josephsofaer.Wallet = Wallet;
Josephsofaer.Subscription = Subscription;
Josephsofaer.Devices = Devices;
Josephsofaer.Device = Device;
export declare namespace Josephsofaer {
  export type RequestOptions = Core.RequestOptions;

  export { Stats as Stats };

  export {
    Auth as Auth,
    type CodeCreate as CodeCreate,
    type CodeLogin as CodeLogin,
    type NetworkCheck as NetworkCheck,
    type NetworkCreate as NetworkCreate,
    type AuthCodeCreateParams as AuthCodeCreateParams,
    type AuthCodeLoginParams as AuthCodeLoginParams,
    type AuthNetworkCheckParams as AuthNetworkCheckParams,
    type AuthNetworkCreateParams as AuthNetworkCreateParams,
  };

  export {
    Network as Network,
    type AuthClient as AuthClient,
    type Clients as Clients,
    type CreateProviderSpec as CreateProviderSpec,
    type FindLocations as FindLocations,
    type FindProviderLocations as FindProviderLocations,
    type FindProviders as FindProviders,
    type FindProviders2 as FindProviders2,
    type ProviderLocations as ProviderLocations,
    type RemoveClient as RemoveClient,
    type NetworkAuthClientParams as NetworkAuthClientParams,
    type NetworkCreateProviderSpecParams as NetworkCreateProviderSpecParams,
    type NetworkFindLocationsParams as NetworkFindLocationsParams,
    type NetworkFindProviderLocationsParams as NetworkFindProviderLocationsParams,
    type NetworkFindProvidersParams as NetworkFindProvidersParams,
    type NetworkFindProviders2Params as NetworkFindProviders2Params,
    type NetworkRemoveClientParams as NetworkRemoveClientParams,
  };

  export {
    Preferences as Preferences,
    type SetPreferences as SetPreferences,
    type PreferenceSetPreferencesParams as PreferenceSetPreferencesParams,
  };

  export {
    Feedback as Feedback,
    type SendFeedback as SendFeedback,
    type FeedbackSendFeedbackParams as FeedbackSendFeedbackParams,
  };

  export {
    Wallet as Wallet,
    type CircleInit as CircleInit,
    type CircleTransferOut as CircleTransferOut,
    type ValidateAddress as ValidateAddress,
    type WalletBalanceResponse as WalletBalanceResponse,
    type WalletCircleTransferOutParams as WalletCircleTransferOutParams,
    type WalletValidateAddressParams as WalletValidateAddressParams,
  };

  export {
    Subscription as Subscription,
    type CheckBalanceCode as CheckBalanceCode,
    type CreatePaymentID as CreatePaymentID,
    type RedeemBalanceCode as RedeemBalanceCode,
    type SubscriptionCheckBalanceCodeParams as SubscriptionCheckBalanceCodeParams,
    type SubscriptionCreatePaymentIDParams as SubscriptionCreatePaymentIDParams,
    type SubscriptionRedeemBalanceCodeParams as SubscriptionRedeemBalanceCodeParams,
  };

  export {
    Devices as Devices,
    type AddDevice as AddDevice,
    type AdoptStatus as AdoptStatus,
    type ConfirmAdopt as ConfirmAdopt,
    type ConfirmShare as ConfirmShare,
    type CreateAdoptCode as CreateAdoptCode,
    type CreateShareCode as CreateShareCode,
    type RemoveAdoptCode as RemoveAdoptCode,
    type SetName as SetName,
    type SetProvide as SetProvide,
    type ShareStatus as ShareStatus,
    type DeviceAddParams as DeviceAddParams,
    type DeviceConfirmShareParams as DeviceConfirmShareParams,
    type DeviceCreateAdoptCodeParams as DeviceCreateAdoptCodeParams,
    type DeviceCreateShareCodeParams as DeviceCreateShareCodeParams,
    type DeviceShareStatusParams as DeviceShareStatusParams,
  };

  export {
    Device as Device,
    type RemoveAssociation as RemoveAssociation,
    type SetAssociationName as SetAssociationName,
    type DeviceAdoptStatusParams as DeviceAdoptStatusParams,
    type DeviceConfirmAdoptParams as DeviceConfirmAdoptParams,
    type DeviceRemoveAdoptCodeParams as DeviceRemoveAdoptCodeParams,
    type DeviceRemoveAssociationParams as DeviceRemoveAssociationParams,
    type DeviceSetAssociationNameParams as DeviceSetAssociationNameParams,
    type DeviceSetNameParams as DeviceSetNameParams,
    type DeviceSetProvideParams as DeviceSetProvideParams,
  };

  export type Balance = API.Balance;
}

export { toFile, fileFromPath } from './uploads';
export {
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
} from './error';

export default Josephsofaer;
