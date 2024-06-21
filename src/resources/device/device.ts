// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as DeviceAPI from './device';
import * as DevicesAPI from '../devices';
import * as AssociationsAPI from './associations';

export class Device extends APIResource {
  associations: AssociationsAPI.Associations = new AssociationsAPI.Associations(this._client);

  /**
   * The status of the adopt-code device. The status can be one of:
   *
   * - unassociated
   * - associated pending confirmation
   * - associated
   */
  adoptStatus(
    body: DeviceAdoptStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevicesAPI.AdoptStatus> {
    return this._client.post('/device/adopt-status', { body, ...options });
  }

  /**
   * Confirm the adoption of a device. This must be called from the side that
   * initiates the adoption.
   */
  confirmAdopt(
    body: DeviceConfirmAdoptParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevicesAPI.ConfirmAdopt> {
    return this._client.post('/device/confirm-adopt', { body, ...options });
  }

  /**
   * Remove an adopt code. This must be called from the side that initiates the
   * adoption.
   */
  removeAdoptCode(
    body: DeviceRemoveAdoptCodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevicesAPI.RemoveAdoptCode> {
    return this._client.post('/device/remove-adopt-code', { body, ...options });
  }

  /**
   * Remove a device association. The association can be any of:
   *
   * - pending adoption device
   * - incoming shared device (not owned by the caller network)
   * - outgoing shared device (owned by the caller network)
   */
  removeAssociation(
    body: DeviceRemoveAssociationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RemoveAssociation> {
    return this._client.post('/device/remove-association', { body, ...options });
  }

  /**
   * Set the name of the association. To set the name of devices owned by the
   * network, use `/device/set-name`.
   */
  setAssociationName(
    body: DeviceSetAssociationNameParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SetAssociationName> {
    return this._client.post('/device/set-association-name', { body, ...options });
  }

  /**
   * Sets the name of a device owned by the network. To set the name of devices
   * shared with the network, use `/device/set-association-name`.
   */
  setName(body: DeviceSetNameParams, options?: Core.RequestOptions): Core.APIPromise<DevicesAPI.SetName> {
    return this._client.post('/device/set-name', { body, ...options });
  }

  /**
   * Set the provide mode for a device.
   */
  setProvide(
    body: DeviceSetProvideParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DevicesAPI.SetProvide> {
    return this._client.post('/device/set-provide', { body, ...options });
  }
}

export interface RemoveAssociation {
  error?: RemoveAssociation.Error;
}

export namespace RemoveAssociation {
  export interface Error {
    message?: string;
  }
}

export interface SetAssociationName {
  error?: SetAssociationName.Error;
}

export namespace SetAssociationName {
  export interface Error {
    message?: string;
  }
}

export interface DeviceAdoptStatusParams {
  adopt_code?: string;
}

export interface DeviceConfirmAdoptParams {
  adopt_code?: string;

  adopt_secret?: string;

  associated_network_name?: string;
}

export interface DeviceRemoveAdoptCodeParams {
  adopt_code?: string;

  adopt_secret?: string;
}

export interface DeviceRemoveAssociationParams {
  code?: string;
}

export interface DeviceSetAssociationNameParams {
  code?: string;

  /**
   * Name of the device
   */
  device_name?: string;
}

export interface DeviceSetNameParams {
  /**
   * udid
   */
  device_id?: string;

  device_name?: string;
}

export interface DeviceSetProvideParams {
  /**
   * udid
   */
  client_id?: string;

  provide_mode?: -1 | 0 | 1 | 2 | 3 | 4;
}

export namespace Device {
  export import RemoveAssociation = DeviceAPI.RemoveAssociation;
  export import SetAssociationName = DeviceAPI.SetAssociationName;
  export import DeviceAdoptStatusParams = DeviceAPI.DeviceAdoptStatusParams;
  export import DeviceConfirmAdoptParams = DeviceAPI.DeviceConfirmAdoptParams;
  export import DeviceRemoveAdoptCodeParams = DeviceAPI.DeviceRemoveAdoptCodeParams;
  export import DeviceRemoveAssociationParams = DeviceAPI.DeviceRemoveAssociationParams;
  export import DeviceSetAssociationNameParams = DeviceAPI.DeviceSetAssociationNameParams;
  export import DeviceSetNameParams = DeviceAPI.DeviceSetNameParams;
  export import DeviceSetProvideParams = DeviceAPI.DeviceSetProvideParams;
  export import Associations = AssociationsAPI.Associations;
  export import DeviceAssociations = AssociationsAPI.DeviceAssociations;
}
