// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as ProvidersAPI from './providers';

export class Providers extends APIResource {
  /**
   * Get all providers in the caller network. Each provider includes stats from the
   * last 24 hours.
   */
  retrieve(options?: Core.RequestOptions): Core.APIPromise<StatsProviders> {
    return this._client.get('/stats/providers', options);
  }
}

export interface StatsProviders {
  /**
   * datetime
   */
  created_time?: string;

  providers?: Array<StatsProviders.Provider>;
}

export namespace StatsProviders {
  export interface Provider {
    /**
     * udid
     */
    client_id?: string;

    clients_last_24h?: number;

    connected?: boolean;

    connected_events_last_24h?: Array<Provider.ConnectedEventsLast24h>;

    contracts_last_24h?: number;

    /**
     * usdc
     */
    payout_last_24h?: number;

    provide_mode?: -1 | 0 | 1 | 2 | 3 | 4;

    /**
     * matching search count
     */
    search_interest_last_24h?: number;

    /**
     * gib
     */
    transfer_data_last_24h?: number;

    /**
     * hours up
     */
    uptime_last_24h?: number;
  }

  export namespace Provider {
    export interface ConnectedEventsLast24h {
      connected?: boolean;

      /**
       * datetime
       */
      event_time?: string;
    }
  }
}

export namespace Providers {
  export import StatsProviders = ProvidersAPI.StatsProviders;
}
