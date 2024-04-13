// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/josephsofaer/core';
import { APIResource } from '@stainless-temp/josephsofaer/resource';
import * as PasswordSetAPI from '@stainless-temp/josephsofaer/resources/auth/password-set';

export class PasswordSet extends APIResource {
  /**
   * Change password.
   */
  create(body: PasswordSetCreateParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/auth/password-set', { body, ...options });
  }
}

export type AuthPasswordSet = unknown;

export interface PasswordSetCreateParams {
  password?: string;

  reset_code?: string;
}

export namespace PasswordSet {
  export import AuthPasswordSet = PasswordSetAPI.AuthPasswordSet;
  export import PasswordSetCreateParams = PasswordSetAPI.PasswordSetCreateParams;
}
