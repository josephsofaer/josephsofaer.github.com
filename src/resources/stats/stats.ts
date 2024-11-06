// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Last90API from './last-90';
import { Last90, StatsLast90 } from './last-90';
import * as ProviderLast90API from './provider-last-90';
import { ProviderLast90, ProviderLast90CreateParams, StatsProviderLast90 } from './provider-last-90';
import * as ProvidersAPI from './providers';
import { Providers, StatsProviders } from './providers';
import * as ProvidersOverviewLast90API from './providers-overview-last-90';
import { ProvidersOverviewLast90, StatsProvidersOverviewLast90 } from './providers-overview-last-90';

export class Stats extends APIResource {
  last90: Last90API.Last90 = new Last90API.Last90(this._client);
  providersOverviewLast90: ProvidersOverviewLast90API.ProvidersOverviewLast90 =
    new ProvidersOverviewLast90API.ProvidersOverviewLast90(this._client);
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);
  providerLast90: ProviderLast90API.ProviderLast90 = new ProviderLast90API.ProviderLast90(this._client);
}

Stats.Last90 = Last90;
Stats.ProvidersOverviewLast90 = ProvidersOverviewLast90;
Stats.Providers = Providers;
Stats.ProviderLast90 = ProviderLast90;

export declare namespace Stats {
  export { Last90 as Last90, type StatsLast90 as StatsLast90 };

  export {
    ProvidersOverviewLast90 as ProvidersOverviewLast90,
    type StatsProvidersOverviewLast90 as StatsProvidersOverviewLast90,
  };

  export { Providers as Providers, type StatsProviders as StatsProviders };

  export {
    ProviderLast90 as ProviderLast90,
    type StatsProviderLast90 as StatsProviderLast90,
    type ProviderLast90CreateParams as ProviderLast90CreateParams,
  };
}
