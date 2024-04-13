// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '@stainless-temp/josephsofaer/resource';
import * as Last90API from '@stainless-temp/josephsofaer/resources/stats/last-90';
import * as ProviderLast90API from '@stainless-temp/josephsofaer/resources/stats/provider-last-90';
import * as ProvidersAPI from '@stainless-temp/josephsofaer/resources/stats/providers';
import * as ProvidersOverviewLast90API from '@stainless-temp/josephsofaer/resources/stats/providers-overview-last-90';

export class Stats extends APIResource {
  last90: Last90API.Last90 = new Last90API.Last90(this._client);
  providersOverviewLast90: ProvidersOverviewLast90API.ProvidersOverviewLast90 =
    new ProvidersOverviewLast90API.ProvidersOverviewLast90(this._client);
  providers: ProvidersAPI.Providers = new ProvidersAPI.Providers(this._client);
  providerLast90: ProviderLast90API.ProviderLast90 = new ProviderLast90API.ProviderLast90(this._client);
}

export namespace Stats {
  export import Last90 = Last90API.Last90;
  export import StatsLast90 = Last90API.StatsLast90;
  export import ProvidersOverviewLast90 = ProvidersOverviewLast90API.ProvidersOverviewLast90;
  export import StatsProvidersOverviewLast90 = ProvidersOverviewLast90API.StatsProvidersOverviewLast90;
  export import Providers = ProvidersAPI.Providers;
  export import StatsProviders = ProvidersAPI.StatsProviders;
  export import ProviderLast90 = ProviderLast90API.ProviderLast90;
  export import StatsProviderLast90 = ProviderLast90API.StatsProviderLast90;
  export import ProviderLast90CreateParams = ProviderLast90API.ProviderLast90CreateParams;
}
