// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/josephsofaer/core';
import { APIResource } from '@stainless-temp/josephsofaer/resource';
import * as NetworkAPI from '@stainless-temp/josephsofaer/resources/network';

export class Network extends APIResource {
  /**
   * Gain permission to use the `connect` protocol as the requested clientId, or
   * assign a new clientId. Each network can have at most 128 clientIds. Above that
   * number, new clientId requests will error until one or more existing clientIds
   * are removed.
   */
  authClient(body: NetworkAuthClientParams, options?: Core.RequestOptions): Core.APIPromise<AuthClient> {
    return this._client.post('/network/auth-client', { body, ...options });
  }

  /**
   * Get the latest status of all clients on this network.
   *
   * Includes:
   *
   * - Resident status, which is the platform counterpart for the client that handles
   *   control commands.
   * - Connections, which are transports from the client to the platform. Note there
   *   can be multiple active connections for a single client.
   * - Provide status
   */
  clientsList(options?: Core.RequestOptions): Core.APIPromise<Clients> {
    return this._client.get('/network/clients', options);
  }

  /**
   * Create a spec object for `find-providers2` using a description of the intended
   * use of the network.
   */
  createProviderSpec(
    body: NetworkCreateProviderSpecParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateProviderSpec> {
    return this._client.post('/network/create-provider-spec', { body, ...options });
  }

  /**
   * Search for locations, groups, and devices that match a query, regardless of
   * whether an providers are active.
   */
  findLocations(
    body: NetworkFindLocationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FindLocations> {
    return this._client.post('/network/find-locations', { body, ...options });
  }

  /**
   * Search for locations and groups that match a query, where there are at least one
   * active provider in good health. The match algorithm accounts for typos and
   * misspelling, and the tolerance can be tuned in the input. Note that a location
   * or group will need to be mapped to an actual provider using
   * `/network/find-providers`.
   */
  findProviderLocations(
    body: NetworkFindProviderLocationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FindLocations> {
    return this._client.post('/network/find-provider-locations', { body, ...options });
  }

  /**
   * Randomly sample providers that for a location or group, which are active and in
   * good health. This allows random iteration by using the exclude input to mark
   * visited providers.
   */
  findProviders(
    body: NetworkFindProvidersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FindProviders> {
    return this._client.post('/network/find-providers', { body, ...options });
  }

  /**
   * Randomly sample providers for locations, groups, or devices, which are active
   * and in good health. This allows random iteration by using the exclude input to
   * mark visited providers.
   */
  findProviders2(
    body: NetworkFindProviders2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FindProviders2> {
    return this._client.post('/network/find-providers2', { body, ...options });
  }

  /**
   * A list of locations and groups where there are at least one active provider in
   * good health. Note that a location or group will need to be mapped to an actual
   * provider using `/network/find-providers`.
   */
  providerLocationsList(options?: Core.RequestOptions): Core.APIPromise<FindLocations> {
    return this._client.get('/network/provider-locations', options);
  }

  /**
   * Remove a client from the network.
   */
  removeClient(
    body: NetworkRemoveClientParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RemoveClient> {
    return this._client.post('/network/remove-client', { body, ...options });
  }
}

export interface AuthClient {
  by_client_jwt?: string;

  error?: AuthClient.Error;
}

export namespace AuthClient {
  export interface Error {
    client_limit_exceeded?: boolean;

    message?: string;
  }
}

export interface Clients {
  clients?: Array<Clients.Client>;
}

export namespace Clients {
  export interface Client {
    auth_time?: string;

    /**
     * udid
     */
    client_id?: string;

    connections?: Array<Client.Connection>;

    create_time?: string;

    description?: string;

    /**
     * udid
     */
    device_id?: string;

    device_name?: string;

    device_spec?: string;

    /**
     * udid
     */
    network_id?: string;

    provide_mode?: -1 | 0 | 1 | 2 | 3 | 4;

    resident?: Client.Resident;
  }

  export namespace Client {
    export interface Connection {
      /**
       * udid
       */
      client_id?: string;

      connect_time?: string;

      connection_block?: unknown;

      connection_host?: string;

      /**
       * udid
       */
      connection_id?: string;

      connection_service?: string;

      disconnect_time?: string;
    }

    export interface Resident {
      /**
       * udid
       */
      client_id?: string;

      /**
       * udid
       */
      instance_id?: string;

      resident_block?: string;

      resident_host?: string;

      /**
       * udid
       */
      resident_id?: string;

      resident_internal_ports?: Array<number>;

      resident_service?: string;
    }
  }
}

export interface CreateProviderSpec {
  specs?: Array<CreateProviderSpec.Spec>;
}

export namespace CreateProviderSpec {
  export interface Spec {
    /**
     * udid
     */
    client_id?: unknown;

    /**
     * udid
     */
    location_group_id?: string;

    /**
     * udid
     */
    location_id?: string;
  }
}

export interface FindLocations {
  devices?: Array<FindLocations.Device>;

  groups?: Array<FindLocations.Group>;

  locations?: Array<FindLocations.Location>;

  specs?: Array<FindLocations.Spec>;
}

export namespace FindLocations {
  export interface Device {
    /**
     * udid
     */
    client_id?: string;

    device_name?: string;
  }

  export interface Group {
    /**
     * udid
     */
    location_group_id?: string;

    match_distance?: number;

    name?: string;

    promoted?: boolean;

    provider_count?: number;
  }

  export interface Location {
    city?: string;

    /**
     * udid
     */
    city_location_id?: string;

    country?: string;

    country_code?: string;

    /**
     * udid
     */
    country_location_id?: string;

    /**
     * udid
     */
    location_id?: string;

    location_type?: 'city' | 'region' | 'country';

    match_distance?: number;

    name?: string;

    provider_count?: number;

    region?: string;

    /**
     * udid
     */
    region_location_id?: string;
  }

  export interface Spec {
    /**
     * udid
     */
    client_id?: unknown;

    /**
     * udid
     */
    location_group_id?: string;

    /**
     * udid
     */
    location_id?: string;
  }
}

export interface FindProviderLocations {
  devices?: Array<FindProviderLocations.Device>;

  groups?: Array<FindProviderLocations.Group>;

  locations?: Array<FindProviderLocations.Location>;

  specs?: Array<FindProviderLocations.Spec>;
}

export namespace FindProviderLocations {
  export interface Device {
    /**
     * udid
     */
    client_id?: string;

    device_name?: string;
  }

  export interface Group {
    /**
     * udid
     */
    location_group_id?: string;

    match_distance?: number;

    name?: string;

    promoted?: boolean;

    provider_count?: number;
  }

  export interface Location {
    city?: string;

    /**
     * udid
     */
    city_location_id?: string;

    country?: string;

    country_code?: string;

    /**
     * udid
     */
    country_location_id?: string;

    /**
     * udid
     */
    location_id?: string;

    location_type?: 'city' | 'region' | 'country';

    match_distance?: number;

    name?: string;

    provider_count?: number;

    region?: string;

    /**
     * udid
     */
    region_location_id?: string;
  }

  export interface Spec {
    /**
     * udid
     */
    client_id?: unknown;

    /**
     * udid
     */
    location_group_id?: string;

    /**
     * udid
     */
    location_id?: string;
  }
}

export interface FindProviders {
  client_ids?: Array<string>;
}

export interface FindProviders2 {
  providers?: Array<unknown>;
}

export interface ProviderLocations {
  devices?: Array<ProviderLocations.Device>;

  groups?: Array<ProviderLocations.Group>;

  locations?: Array<ProviderLocations.Location>;

  specs?: Array<ProviderLocations.Spec>;
}

export namespace ProviderLocations {
  export interface Device {
    /**
     * udid
     */
    client_id?: string;

    device_name?: string;
  }

  export interface Group {
    /**
     * udid
     */
    location_group_id?: string;

    match_distance?: number;

    name?: string;

    promoted?: boolean;

    provider_count?: number;
  }

  export interface Location {
    city?: string;

    /**
     * udid
     */
    city_location_id?: string;

    country?: string;

    country_code?: string;

    /**
     * udid
     */
    country_location_id?: string;

    /**
     * udid
     */
    location_id?: string;

    location_type?: 'city' | 'region' | 'country';

    match_distance?: number;

    name?: string;

    provider_count?: number;

    region?: string;

    /**
     * udid
     */
    region_location_id?: string;
  }

  export interface Spec {
    /**
     * udid
     */
    client_id?: unknown;

    /**
     * udid
     */
    location_group_id?: string;

    /**
     * udid
     */
    location_id?: string;
  }
}

export interface RemoveClient {
  error?: RemoveClient.Error;
}

export namespace RemoveClient {
  export interface Error {
    message?: string;
  }
}

export interface NetworkAuthClientParams {
  /**
   * udid. Optional. If this is given, it must currently exist in the network. Omit
   * this to assign a new client id.
   */
  client_id?: string;

  /**
   * udid. Optional. | The client that the new client is derived from. If this is
   * called with a client jwt, the derived client id is inferred from the jwt.
   */
  derived_client_id?: string;

  /**
   * If this is a new device, sets the device name to the description of the device.
   */
  description?: string;

  /**
   * If this is a new device, sets the device spec.
   */
  device_spec?: string;
}

export interface NetworkCreateProviderSpecParams {
  /**
   * description of the intended use of the connection
   */
  query?: string;
}

export interface NetworkFindLocationsParams {
  enable_max_distance_fraction?: boolean;

  max_distance_fraction?: number;

  query?: string;
}

export interface NetworkFindProviderLocationsParams {
  enable_max_distance_fraction?: boolean;

  max_distance_fraction?: number;

  query?: string;
}

export interface NetworkFindProvidersParams {
  count?: number;

  exclude_location_ids?: Array<string>;

  /**
   * udid
   */
  location_group_id?: string;

  /**
   * udid
   */
  location_id?: string;
}

export interface NetworkFindProviders2Params {
  count?: number;

  exclude_client_ids?: Array<string>;

  specs?: Array<NetworkFindProviders2Params.Spec>;
}

export namespace NetworkFindProviders2Params {
  export interface Spec {
    /**
     * udid
     */
    client_id?: unknown;

    /**
     * udid
     */
    location_group_id?: string;

    /**
     * udid
     */
    location_id?: string;
  }
}

export interface NetworkRemoveClientParams {
  /**
   * udid
   */
  client_id?: string;
}

export namespace Network {
  export import AuthClient = NetworkAPI.AuthClient;
  export import Clients = NetworkAPI.Clients;
  export import CreateProviderSpec = NetworkAPI.CreateProviderSpec;
  export import FindLocations = NetworkAPI.FindLocations;
  export import FindProviderLocations = NetworkAPI.FindProviderLocations;
  export import FindProviders = NetworkAPI.FindProviders;
  export import FindProviders2 = NetworkAPI.FindProviders2;
  export import ProviderLocations = NetworkAPI.ProviderLocations;
  export import RemoveClient = NetworkAPI.RemoveClient;
  export import NetworkAuthClientParams = NetworkAPI.NetworkAuthClientParams;
  export import NetworkCreateProviderSpecParams = NetworkAPI.NetworkCreateProviderSpecParams;
  export import NetworkFindLocationsParams = NetworkAPI.NetworkFindLocationsParams;
  export import NetworkFindProviderLocationsParams = NetworkAPI.NetworkFindProviderLocationsParams;
  export import NetworkFindProvidersParams = NetworkAPI.NetworkFindProvidersParams;
  export import NetworkFindProviders2Params = NetworkAPI.NetworkFindProviders2Params;
  export import NetworkRemoveClientParams = NetworkAPI.NetworkRemoveClientParams;
}
