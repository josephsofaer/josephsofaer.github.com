// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as PasswordResetAPI from './password-reset';

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

export namespace PasswordReset {
  export import AuthPasswordReset = PasswordResetAPI.AuthPasswordReset;
  export import PasswordResetCreateParams = PasswordResetAPI.PasswordResetCreateParams;
}
