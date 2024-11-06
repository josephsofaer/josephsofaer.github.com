// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class PasswordReset extends APIResource {
  /**
   * Send password reset code to email or phone number.
   */
  create(body: PasswordResetCreateParams, options?: Core.RequestOptions): Core.APIPromise<AuthPasswordReset> {
    return this._client.post('/auth/password-reset', { body, ...options });
  }
}

export interface AuthPasswordReset {
  /**
   * email or phone number
   */
  user_auth?: string;
}

export interface PasswordResetCreateParams {
  /**
   * email or phone number
   */
  user_auth?: string;
}

export declare namespace PasswordReset {
  export {
    type AuthPasswordReset as AuthPasswordReset,
    type PasswordResetCreateParams as PasswordResetCreateParams,
  };
}
