// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/josephsofaer/core';
import { APIResource } from '@stainless-temp/josephsofaer/resource';
import * as WalletAPI from '@stainless-temp/josephsofaer/resources/wallet';

export class Wallet extends APIResource {
  /**
   * Get the balance for the USDC user custody wallet. The user custody wallet allows
   * BringYour to query the balance, but the user must take actions against the
   * wallet.
   */
  balance(options?: Core.RequestOptions): Core.APIPromise<WalletBalanceResponse> {
    return this._client.get('/wallet/balance', options);
  }

  /**
   * Initialize the Circle USDC user self custody wallet. This starts a process that
   * must be completed by the user.
   */
  circleInit(options?: Core.RequestOptions): Core.APIPromise<CircleInit> {
    return this._client.post('/wallet/circle-init', options);
  }

  /**
   * Set up a transfer from the Circle USDC user self custody wallet to an address.
   * This starts a process that must be completed by the user.
   */
  circleTransferOut(
    body: WalletCircleTransferOutParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CircleTransferOut> {
    return this._client.post('/wallet/circle-transfer-out', { body, ...options });
  }

  /**
   * Validate a USDC wallet address on the user custody wallet chain. This can be
   * used to check whether an address can receive a transfer out from the user
   * custody wallet. Please use this before initiating any transfer out to avoid lost
   * funds.
   */
  validateAddress(
    body: WalletValidateAddressParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ValidateAddress> {
    return this._client.post('/wallet/validate-address', { body, ...options });
  }
}

export interface CircleInit {
  challenge_id?: string;

  error?: CircleInit.Error;

  user_token?: CircleInit.UserToken;
}

export namespace CircleInit {
  export interface Error {
    message?: string;
  }

  export interface UserToken {
    encryption_key?: string;

    user_token?: string;
  }
}

export interface CircleTransferOut {
  challenge_id?: string;

  error?: CircleTransferOut.Error;

  user_token?: CircleTransferOut.UserToken;
}

export namespace CircleTransferOut {
  export interface Error {
    message?: string;
  }

  export interface UserToken {
    encryption_key?: string;

    user_token?: string;
  }
}

export interface ValidateAddress {
  valid?: boolean;
}

export interface WalletBalanceResponse {
  wallet_info?: WalletBalanceResponse.WalletInfo;
}

export namespace WalletBalanceResponse {
  export interface WalletInfo {
    address?: string;

    balance_usdc_nano_cents?: number;

    blockchain?: string;

    blockchain_symbol?: string;

    create_date?: string;

    token_id?: string;

    wallet_id?: string;
  }
}

export interface WalletCircleTransferOutParams {
  amount_usdc_nano_cents?: number;

  /**
   * user consent to accept terms of transfer
   */
  terms?: boolean;

  to_address?: string;
}

export interface WalletValidateAddressParams {
  address?: string;
}

export namespace Wallet {
  export import CircleInit = WalletAPI.CircleInit;
  export import CircleTransferOut = WalletAPI.CircleTransferOut;
  export import ValidateAddress = WalletAPI.ValidateAddress;
  export import WalletBalanceResponse = WalletAPI.WalletBalanceResponse;
  export import WalletCircleTransferOutParams = WalletAPI.WalletCircleTransferOutParams;
  export import WalletValidateAddressParams = WalletAPI.WalletValidateAddressParams;
}
