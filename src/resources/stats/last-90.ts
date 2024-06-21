// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as Last90API from './last-90';

export class Last90 extends APIResource {
  /**
   * Get network statistics for the last 90 days. The statistics are updated
   * approximately every 60s.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<StatsLast90> {
    return this._client.get('/stats/last-90', options);
  }
}

export interface StatsLast90 {
  /**
   * yyyy-mm-dd to count
   */
  all_packets_data?: Record<string, number>;

  all_packets_summary?: number;

  all_packets_summary_rate?: number;

  /**
   * yyyy-mm-dd to count
   */
  all_transfer_data?: Record<string, number>;

  all_transfer_summary?: number;

  all_transfer_summary_rate?: number;

  /**
   * yyyy-mm-dd to count
   */
  cities_data?: Record<string, number>;

  cities_summary?: number;

  /**
   * yyyy-mm-dd to count
   */
  countries_data?: Record<string, number>;

  countries_summary?: number;

  /**
   * Unix epoch time UTC
   */
  created_time?: number;

  /**
   * yyyy-mm-dd to count
   */
  devices_data?: Record<string, number>;

  devices_summary?: number;

  /**
   * yyyy-mm-dd to count
   */
  extender_transfer_data?: Record<string, number>;

  extender_transfer_summary?: number;

  extender_transfer_summary_rate?: number;

  /**
   * yyyy-mm-dd to count
   */
  extenders_data?: Record<string, number>;

  extenders_summary?: number;

  extenders_summary_superspeed?: number;

  /**
   * yyyy-mm-dd to count
   */
  extenders_superspeed_data?: Record<string, number>;

  lookback?: number;

  /**
   * yyyy-mm-dd to count
   */
  networks_data?: Record<string, number>;

  networks_summary?: number;

  /**
   * yyyy-mm-dd to count
   */
  providers_data?: Record<string, number>;

  providers_summary?: number;

  providers_summary_superspeed?: number;

  /**
   * yyyy-mm-dd to count
   */
  providers_superspeed_data?: Record<string, number>;

  /**
   * yyyy-mm-dd to count
   */
  regions_data?: Record<string, number>;

  regions_summary?: number;
}

export namespace Last90 {
  export import StatsLast90 = Last90API.StatsLast90;
}
