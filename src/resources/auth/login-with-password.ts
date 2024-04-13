// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/josephsofaer/core';
import { APIResource } from '@stainless-temp/josephsofaer/resource';
import * as LoginWithPasswordAPI from '@stainless-temp/josephsofaer/resources/auth/login-with-password';

export class LoginWithPassword extends APIResource {
  /**
   * Password login for email and phone number.
   */
  create(
    body: LoginWithPasswordCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthLoginWithPassword> {
    return this._client.post('/auth/login-with-password', { body, ...options });
  }
}

export interface AuthLoginWithPassword {
  error?: AuthLoginWithPassword.Error;

  network?: AuthLoginWithPassword.Network;

  verification_required?: AuthLoginWithPassword.VerificationRequired;
}

export namespace AuthLoginWithPassword {
  export interface Error {
    message?: string;
  }

  export interface Network {
    by_jwt?: string;

    name?: string;
  }

  export interface VerificationRequired {
    /**
     * email or phone number
     */
    user_auth?: string;
  }
}

export interface LoginWithPasswordCreateParams {
  password?: string;

  /**
   * email or phone number
   */
  user_auth?: string;
}

export namespace LoginWithPassword {
  export import AuthLoginWithPassword = LoginWithPasswordAPI.AuthLoginWithPassword;
  export import LoginWithPasswordCreateParams = LoginWithPasswordAPI.LoginWithPasswordCreateParams;
}
