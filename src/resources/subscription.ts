// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as SubscriptionAPI from './subscription';
import * as Shared from './shared';

export class Subscription extends APIResource {
  /**
   * Get the current subscription status and transfer balance.
   */
  balance(options?: Core.RequestOptions): Core.APIPromise<Shared.Balance> {
    return this._client.get('/subscription/balance', options);
  }

  /**
   * Check if the balance code is valid.
   */
  checkBalanceCode(
    body: SubscriptionCheckBalanceCodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CheckBalanceCode> {
    return this._client.post('/subscription/check-balance-code', { body, ...options });
  }

  /**
   * Creates an anonymous payment identifier to be used with purchases. This keeps
   * network information out of the payment processor system. For example in Google
   * Play this is called the "obfuscated account id".
   */
  createPaymentId(
    body: SubscriptionCreatePaymentIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreatePaymentID> {
    return this._client.post('/subscription/create-payment-id', { body, ...options });
  }

  /**
   * Redeem the balance code and add the transfer balance to the caller network.
   */
  redeemBalanceCode(
    body: SubscriptionRedeemBalanceCodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RedeemBalanceCode> {
    return this._client.post('/subscription/redeem-balance-code', { body, ...options });
  }
}

export interface CheckBalanceCode {
  balance?: CheckBalanceCode.Balance;

  error?: CheckBalanceCode.Error;
}

export namespace CheckBalanceCode {
  export interface Balance {
    balance_byte_count?: number;

    end_time?: string;

    start_time?: string;
  }

  export interface Error {
    message?: string;
  }
}

export interface CreatePaymentID {
  error?: CreatePaymentID.Error;

  /**
   * udid
   */
  subscription_payment_id?: string;
}

export namespace CreatePaymentID {
  export interface Error {
    message?: string;
  }
}

export interface RedeemBalanceCode {
  error?: RedeemBalanceCode.Error;

  transfer_balance?: RedeemBalanceCode.TransferBalance;
}

export namespace RedeemBalanceCode {
  export interface Error {
    message?: string;
  }

  export interface TransferBalance {
    balance_byte_count?: number;

    end_time?: string;

    start_time?: string;

    /**
     * udid
     */
    transfer_balance_id?: string;
  }
}

export interface SubscriptionCheckBalanceCodeParams {
  secret?: string;
}

export interface SubscriptionCreatePaymentIDParams {}

export interface SubscriptionRedeemBalanceCodeParams {
  secret?: string;
}

export namespace Subscription {
  export import CheckBalanceCode = SubscriptionAPI.CheckBalanceCode;
  export import CreatePaymentID = SubscriptionAPI.CreatePaymentID;
  export import RedeemBalanceCode = SubscriptionAPI.RedeemBalanceCode;
  export import SubscriptionCheckBalanceCodeParams = SubscriptionAPI.SubscriptionCheckBalanceCodeParams;
  export import SubscriptionCreatePaymentIDParams = SubscriptionAPI.SubscriptionCreatePaymentIDParams;
  export import SubscriptionRedeemBalanceCodeParams = SubscriptionAPI.SubscriptionRedeemBalanceCodeParams;
}
