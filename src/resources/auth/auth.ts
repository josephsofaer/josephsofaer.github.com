// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as LoginAPI from './login';
import { AuthLogin, Login, LoginCreateParams } from './login';
import * as LoginWithPasswordAPI from './login-with-password';
import {
  AuthLoginWithPassword,
  LoginWithPassword,
  LoginWithPasswordCreateParams,
} from './login-with-password';
import * as PasswordResetAPI from './password-reset';
import { AuthPasswordReset, PasswordReset, PasswordResetCreateParams } from './password-reset';
import * as PasswordSetAPI from './password-set';
import { AuthPasswordSet, PasswordSet, PasswordSetCreateParams } from './password-set';
import * as VerifyAPI from './verify';
import { AuthVerify, Verify, VerifyCreateParams } from './verify';
import * as VerifySendAPI from './verify-send';
import { AuthVerifySend, VerifySend, VerifySendCreateParams } from './verify-send';

export class Auth extends APIResource {
  login: LoginAPI.Login = new LoginAPI.Login(this._client);
  loginWithPassword: LoginWithPasswordAPI.LoginWithPassword = new LoginWithPasswordAPI.LoginWithPassword(
    this._client,
  );
  verify: VerifyAPI.Verify = new VerifyAPI.Verify(this._client);
  verifySend: VerifySendAPI.VerifySend = new VerifySendAPI.VerifySend(this._client);
  passwordReset: PasswordResetAPI.PasswordReset = new PasswordResetAPI.PasswordReset(this._client);
  passwordSet: PasswordSetAPI.PasswordSet = new PasswordSetAPI.PasswordSet(this._client);

  /**
   * Create a limited use code (auth code) to share authentication with connected
   * apps and tools. The code is tied to the caller session, and will be expired with
   * any of the caller's sessions. Currently a code cannot be created for a client
   * JWT (from `/network/auth-client`). This is a subset of an OAuth flow.
   */
  codeCreate(body: AuthCodeCreateParams, options?: Core.RequestOptions): Core.APIPromise<CodeCreate> {
    return this._client.post('/auth/code-create', { body, ...options });
  }

  /**
   * Authenticate with an auth code. The returned session is tied to the session that
   * created the auth code, and will be expired with any of the creator's sessions.
   * This is a subset of an OAuth flow.
   */
  codeLogin(body: AuthCodeLoginParams, options?: Core.RequestOptions): Core.APIPromise<CodeLogin> {
    return this._client.post('/auth/code-login', { body, ...options });
  }

  /**
   * Check if the network name is available. A new network name must satisfy:
   *
   * - at least 3 characters different from an existing network name
   * - at least 8 characters
   * - domain name compatible (see RFC 5890)
   * - not contain the dash (-) character (BringYour subdomains are reverse-flattened
   *   to a single level using dashes)
   */
  networkCheck(body: AuthNetworkCheckParams, options?: Core.RequestOptions): Core.APIPromise<NetworkCheck> {
    return this._client.post('/auth/network-check', { body, ...options });
  }

  /**
   * Create a new network. A user authority can be associated with at most one
   * network.
   */
  networkCreate(
    body: AuthNetworkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkCreate> {
    return this._client.post('/auth/network-create', { body, ...options });
  }
}

export interface CodeCreate {
  auth_code?: string;

  duration_minutes?: number;

  error?: CodeCreate.Error;

  uses?: number;
}

export namespace CodeCreate {
  export interface Error {
    auth_code_limit_exceeded?: boolean;

    message?: string;
  }
}

export interface CodeLogin {
  by_jwt?: string;

  error?: CodeLogin.Error;
}

export namespace CodeLogin {
  export interface Error {
    message?: string;
  }
}

export interface NetworkCheck {
  available?: boolean;
}

export interface NetworkCreate {
  error?: NetworkCreate.Error;

  network?: NetworkCreate.Network;

  verification_required?: NetworkCreate.VerificationRequired;
}

export namespace NetworkCreate {
  export interface Error {
    message?: string;
  }

  export interface Network {
    by_jwt?: string;

    network_name?: string;
  }

  export interface VerificationRequired {
    /**
     * email or phone number
     */
    user_auth?: string;
  }
}

export interface AuthCodeCreateParams {
  duration_minutes?: number;

  uses?: number;
}

export interface AuthCodeLoginParams {
  auth_code?: string;
}

export interface AuthNetworkCheckParams {
  network_name?: string;
}

export interface AuthNetworkCreateParams {
  auth_jwt?: string;

  auth_jwt_type?: 'apple' | 'google';

  network_name?: string;

  password?: string;

  /**
   * user consent to accept terms of service
   */
  terms?: boolean;

  /**
   * email or phone number
   */
  user_auth?: string;

  user_name?: string;
}

Auth.Login = Login;
Auth.LoginWithPassword = LoginWithPassword;
Auth.Verify = Verify;
Auth.VerifySend = VerifySend;
Auth.PasswordReset = PasswordReset;
Auth.PasswordSet = PasswordSet;

export declare namespace Auth {
  export {
    type CodeCreate as CodeCreate,
    type CodeLogin as CodeLogin,
    type NetworkCheck as NetworkCheck,
    type NetworkCreate as NetworkCreate,
    type AuthCodeCreateParams as AuthCodeCreateParams,
    type AuthCodeLoginParams as AuthCodeLoginParams,
    type AuthNetworkCheckParams as AuthNetworkCheckParams,
    type AuthNetworkCreateParams as AuthNetworkCreateParams,
  };

  export { Login as Login, type AuthLogin as AuthLogin, type LoginCreateParams as LoginCreateParams };

  export {
    LoginWithPassword as LoginWithPassword,
    type AuthLoginWithPassword as AuthLoginWithPassword,
    type LoginWithPasswordCreateParams as LoginWithPasswordCreateParams,
  };

  export { Verify as Verify, type AuthVerify as AuthVerify, type VerifyCreateParams as VerifyCreateParams };

  export {
    VerifySend as VerifySend,
    type AuthVerifySend as AuthVerifySend,
    type VerifySendCreateParams as VerifySendCreateParams,
  };

  export {
    PasswordReset as PasswordReset,
    type AuthPasswordReset as AuthPasswordReset,
    type PasswordResetCreateParams as PasswordResetCreateParams,
  };

  export {
    PasswordSet as PasswordSet,
    type AuthPasswordSet as AuthPasswordSet,
    type PasswordSetCreateParams as PasswordSetCreateParams,
  };
}
