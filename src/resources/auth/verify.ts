// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as VerifyAPI from './verify';

export class Verify extends APIResource {
  /**
   * Verify ownership of email or phone number.
   */
  create(body: VerifyCreateParams, options?: Core.RequestOptions): Core.APIPromise<AuthVerify> {
    return this._client.post('/auth/verify', { body, ...options });
  }
}

export interface AuthVerify {
  error?: unknown;

  network?: unknown;
}

export interface VerifyCreateParams {
  /**
   * email or phone number
   */
  user_auth?: string;

  verify_code?: string;
}

export namespace Verify {
  export import AuthVerify = VerifyAPI.AuthVerify;
  export import VerifyCreateParams = VerifyAPI.VerifyCreateParams;
}
