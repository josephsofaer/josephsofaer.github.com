// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as PasswordSetAPI from './password-set';

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
