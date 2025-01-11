// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Devices extends APIResource {
  /**
   * Add a device, which can either be owned by the network or shared with the
   * network. The code provided can be either adoption code or a share code. Once a
   * code is added, the device becomes an associated device until confirmation. If
   * the device is a shared device, it will remain an associated device after
   * confirmation.
   */
  add(body: DeviceAddParams, options?: Core.RequestOptions): Core.APIPromise<AddDevice> {
    return this._client.post('/device/add', { body, ...options });
  }

  /**
   * Confirm the share of a device. This must be called from the side that initiates
   * the share.
   */
  confirmShare(body: DeviceConfirmShareParams, options?: Core.RequestOptions): Core.APIPromise<ConfirmShare> {
    return this._client.post('/device/confirm-share', { body, ...options });
  }

  /**
   * Creates a code to adopt a device. The adopt code is valid for a limited time.
   */
  createAdoptCode(
    body: DeviceCreateAdoptCodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateAdoptCode> {
    return this._client.post('/device/create-adopt-code', { body, ...options });
  }

  /**
   * Creates a code to share a device.
   */
  createShareCode(
    body: DeviceCreateShareCodeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateShareCode> {
    return this._client.post('/device/create-share-code', { body, ...options });
  }

  /**
   * A QR code that maps to a URL to adopt the device. Send it to someone to scan to
   * adopt the device.
   */
  qrPng(code: string, options?: Core.RequestOptions): Core.APIPromise<Response> {
    return this._client.get(`/device/adopt-code/${code}/qr.png`, {
      ...options,
      headers: { Accept: 'image/png', ...options?.headers },
      __binaryResponse: true,
    });
  }

  /**
   * The status of the shared device. The status can be one of:
   *
   * - unassociated
   * - associated pending confirmation
   * - associated
   */
  shareStatus(body: DeviceShareStatusParams, options?: Core.RequestOptions): Core.APIPromise<ShareStatus> {
    return this._client.post('/device/share-status', { body, ...options });
  }
}

export interface AddDevice {
  /**
   * The name of the source network. Only for share codes.
   */
  associated_network_name?: string;

  /**
   * udid. Only for share codes.
   */
  client_id?: string;

  code?: string;

  code_type?: 'share' | 'adopt';

  /**
   * Name of the device shared by the owner
   */
  device_name?: string;

  duration_minutes?: number;

  error?: AddDevice.Error;
}

export namespace AddDevice {
  export interface Error {
    message?: string;
  }
}

export interface AdoptStatus {
  associated_network_name?: string;

  error?: AdoptStatus.Error;

  pending?: boolean;
}

export namespace AdoptStatus {
  export interface Error {
    message?: string;
  }
}

export interface ConfirmAdopt {
  /**
   * client auth
   */
  by_client_jwt?: string;

  error?: ConfirmAdopt.Error;
}

export namespace ConfirmAdopt {
  export interface Error {
    message?: string;
  }
}

export interface ConfirmShare {
  associated_network_name?: string;

  error?: ConfirmShare.Error;
}

export namespace ConfirmShare {
  export interface Error {
    message?: string;
  }
}

export interface CreateAdoptCode {
  adopt_code?: string;

  /**
   * keep this secret locally to use with confirm
   */
  adopt_secret?: string;

  duration_minutes?: number;

  error?: CreateAdoptCode.Error;
}

export namespace CreateAdoptCode {
  export interface Error {
    message?: string;
  }
}

export interface CreateShareCode {
  error?: CreateShareCode.Error;

  share_code?: string;
}

export namespace CreateShareCode {
  export interface Error {
    message?: string;
  }
}

export interface RemoveAdoptCode {
  error?: RemoveAdoptCode.Error;
}

export namespace RemoveAdoptCode {
  export interface Error {
    message?: string;
  }
}

export interface SetName {
  error?: SetName.Error;
}

export namespace SetName {
  export interface Error {
    message?: string;
  }
}

export interface SetProvide {
  error?: SetProvide.Error;

  provide_mode?: -1 | 0 | 1 | 2 | 3 | 4;
}

export namespace SetProvide {
  export interface Error {
    message?: string;
  }
}

export interface ShareStatus {
  associated_network_name?: string;

  error?: ShareStatus.Error;

  pending?: boolean;
}

export namespace ShareStatus {
  export interface Error {
    message?: string;
  }
}

export interface DeviceAddParams {
  /**
   * share code or adopt code
   */
  code?: string;
}

export interface DeviceConfirmShareParams {
  associated_network_name?: string;

  share_code?: string;
}

export interface DeviceCreateAdoptCodeParams {
  /**
   * Name of the device that will be shared to the adopter
   */
  device_name?: string;

  device_spec?: string;
}

export interface DeviceCreateShareCodeParams {
  /**
   * udid
   */
  client_id?: string;

  /**
   * Name of the device that will be shared to the guest
   */
  device_name?: string;
}

export interface DeviceShareStatusParams {
  share_code?: string;
}

export declare namespace Devices {
  export {
    type AddDevice as AddDevice,
    type AdoptStatus as AdoptStatus,
    type ConfirmAdopt as ConfirmAdopt,
    type ConfirmShare as ConfirmShare,
    type CreateAdoptCode as CreateAdoptCode,
    type CreateShareCode as CreateShareCode,
    type RemoveAdoptCode as RemoveAdoptCode,
    type SetName as SetName,
    type SetProvide as SetProvide,
    type ShareStatus as ShareStatus,
    type DeviceAddParams as DeviceAddParams,
    type DeviceConfirmShareParams as DeviceConfirmShareParams,
    type DeviceCreateAdoptCodeParams as DeviceCreateAdoptCodeParams,
    type DeviceCreateShareCodeParams as DeviceCreateShareCodeParams,
    type DeviceShareStatusParams as DeviceShareStatusParams,
  };
}
