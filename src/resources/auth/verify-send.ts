// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as VerifySendAPI from './verify-send';

export class VerifySend extends APIResource {
  /**
   * Send verification code to email or phone number.
   */
  create(body: VerifySendCreateParams, options?: Core.RequestOptions): Core.APIPromise<AuthVerifySend> {
    return this._client.post('/auth/verify-send', { body, ...options });
  }
}

export interface AuthVerifySend {
  /**
   * email or phone number
   */
  user_auth?: string;
}

export interface VerifySendCreateParams {
  /**
   * email or phone number
   */
  user_auth?: string;
}

export namespace VerifySend {
  export import AuthVerifySend = VerifySendAPI.AuthVerifySend;
  export import VerifySendCreateParams = VerifySendAPI.VerifySendCreateParams;
}
