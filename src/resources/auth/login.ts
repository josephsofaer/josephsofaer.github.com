// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as LoginAPI from './login';

export class Login extends APIResource {
  /**
   * Start a login for a user authority. The user authority may be:
   *
   * - email
   * - phone number
   * - Apple JWT
   * - Google JWT
   */
  create(body: LoginCreateParams, options?: Core.RequestOptions): Core.APIPromise<AuthLogin> {
    return this._client.post('/auth/login', { body, ...options });
  }
}

export interface AuthLogin {
  auth_allowed?: Array<'password' | 'apple' | 'google'>;

  error?: AuthLogin.Error;

  network?: AuthLogin.Network;

  /**
   * email or phone number
   */
  user_auth?: string;

  user_name?: string;
}

export namespace AuthLogin {
  export interface Error {
    message?: string;

    suggested_user_auth?: 'password' | 'apple' | 'google';
  }

  export interface Network {
    by_jwt?: string;
  }
}

export interface LoginCreateParams {
  auth_jwt?: string;

  auth_jwt_type?: 'apple' | 'google';

  /**
   * email or phone number
   */
  user_auth?: string;
}

export namespace Login {
  export import AuthLogin = LoginAPI.AuthLogin;
  export import LoginCreateParams = LoginAPI.LoginCreateParams;
}
