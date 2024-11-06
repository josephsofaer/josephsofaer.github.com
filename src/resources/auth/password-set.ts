// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

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

export declare namespace PasswordSet {
  export { type AuthPasswordSet as AuthPasswordSet, type PasswordSetCreateParams as PasswordSetCreateParams };
}
