// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as ProvidersOverviewLast90API from './providers-overview-last-90';

export class ProvidersOverviewLast90 extends APIResource {
  /**
   * Get statistics for all providers in the caller network for the last 90 days.
   * This is meant to answer the top level question of how the providers in a network
   * are performing.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<StatsProvidersOverviewLast90> {
    return this._client.get('/stats/providers-overview-last-90', options);
  }
}

export interface StatsProvidersOverviewLast90 {
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

export namespace ProvidersOverviewLast90 {
  export import StatsProvidersOverviewLast90 = ProvidersOverviewLast90API.StatsProvidersOverviewLast90;
}
