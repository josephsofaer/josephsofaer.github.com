// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/josephsofaer/core';
import { APIResource } from '@stainless-temp/josephsofaer/resource';
import * as ProviderLast90API from '@stainless-temp/josephsofaer/resources/stats/provider-last-90';

export class ProviderLast90 extends APIResource {
  /**
   * Get detailed stats on a single provider in the caller network. This is meant to
   * give the user complete visibility over usage.
   */
  create(
    body: ProviderLast90CreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatsProviderLast90> {
    return this._client.post('/stats/provider-last-90', { body, ...options });
  }
}

export interface StatsProviderLast90 {
  client_details?: Array<StatsProviderLast90.ClientDetail>;

  /**
   * yyyy-mm-dd to count
   */
  clients?: Record<string, number>;

  /**
   * yyyy-mm-dd to count
   */
  contracts?: Record<string, number>;

  /**
   * datetime
   */
  created_time?: string;

  lookback?: number;

  /**
   * yyyy-mm-dd to payout USDC
   */
  payout?: Record<string, number>;

  /**
   * yyyy-mm-dd to matching search count
   */
  search_interest?: Record<string, number>;

  /**
   * yyyy-mm-dd to gib
   */
  transfer_data?: Record<string, number>;

  /**
   * yyyy-mm-dd to hours
   */
  uptime?: Record<string, number>;
}

export namespace StatsProviderLast90 {
  export interface ClientDetail {
    /**
     * udid
     */
    client_id?: string;

    /**
     * yyyy-mm-dd to gib
     */
    transfer_data?: Record<string, number>;
  }
}

export interface ProviderLast90CreateParams {
  /**
   * udid
   */
  client_id?: string;
}

export namespace ProviderLast90 {
  export import StatsProviderLast90 = ProviderLast90API.StatsProviderLast90;
  export import ProviderLast90CreateParams = ProviderLast90API.ProviderLast90CreateParams;
}
