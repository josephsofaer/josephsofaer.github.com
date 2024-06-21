// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as AssociationsAPI from './associations';

export class Associations extends APIResource {
  /**
   * The devices associated with the caller network. Associated devices are:
   *
   * - pending adoption devices
   * - incoming shared devices (not owned by the caller network)
   * - outgoing shared devices (owned by the caller network)
   */
  list(options?: Core.RequestOptions): Core.APIPromise<DeviceAssociations> {
    return this._client.get('/device/associations', options);
  }
}

export interface DeviceAssociations {
  /**
   * devices owned by another network shared to the caller network
   */
  incoming_shared_devices?: Array<DeviceAssociations.IncomingSharedDevice>;

  /**
   * devices owned by the caller network shared to another network
   */
  outgoing_shared_devices?: Array<DeviceAssociations.OutgoingSharedDevice>;

  /**
   * devices pending adoption that need to be confirmed by the offerer
   */
  pending_adoption_devices?: Array<DeviceAssociations.PendingAdoptionDevice>;
}

export namespace DeviceAssociations {
  export interface IncomingSharedDevice {
    /**
     * udid
     */
    client_id?: string;

    code?: string;

    /**
     * Name of the device
     */
    device_name?: string;

    network_name?: string;

    pending?: boolean;
  }

  export interface OutgoingSharedDevice {
    /**
     * udid
     */
    client_id?: string;

    code?: string;

    /**
     * Name of the device
     */
    device_name?: string;

    network_name?: string;

    pending?: boolean;
  }

  export interface PendingAdoptionDevice {
    code?: string;

    /**
     * Name of the device
     */
    device_name?: string;

    duration_minutes?: number;
  }
}

export namespace Associations {
  export import DeviceAssociations = AssociationsAPI.DeviceAssociations;
}
