// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/josephsofaer/core';
import { APIResource } from '@stainless-temp/josephsofaer/resource';
import * as AuthAPI from '@stainless-temp/josephsofaer/resources/auth/auth';
import * as LoginAPI from '@stainless-temp/josephsofaer/resources/auth/login';
import * as LoginWithPasswordAPI from '@stainless-temp/josephsofaer/resources/auth/login-with-password';
import * as PasswordResetAPI from '@stainless-temp/josephsofaer/resources/auth/password-reset';
import * as PasswordSetAPI from '@stainless-temp/josephsofaer/resources/auth/password-set';
import * as VerifyAPI from '@stainless-temp/josephsofaer/resources/auth/verify';
import * as VerifySendAPI from '@stainless-temp/josephsofaer/resources/auth/verify-send';

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

export namespace Auth {
  export import CodeCreate = AuthAPI.CodeCreate;
  export import CodeLogin = AuthAPI.CodeLogin;
  export import NetworkCheck = AuthAPI.NetworkCheck;
  export import NetworkCreate = AuthAPI.NetworkCreate;
  export import AuthCodeCreateParams = AuthAPI.AuthCodeCreateParams;
  export import AuthCodeLoginParams = AuthAPI.AuthCodeLoginParams;
  export import AuthNetworkCheckParams = AuthAPI.AuthNetworkCheckParams;
  export import AuthNetworkCreateParams = AuthAPI.AuthNetworkCreateParams;
  export import Login = LoginAPI.Login;
  export import AuthLogin = LoginAPI.AuthLogin;
  export import LoginCreateParams = LoginAPI.LoginCreateParams;
  export import LoginWithPassword = LoginWithPasswordAPI.LoginWithPassword;
  export import AuthLoginWithPassword = LoginWithPasswordAPI.AuthLoginWithPassword;
  export import LoginWithPasswordCreateParams = LoginWithPasswordAPI.LoginWithPasswordCreateParams;
  export import Verify = VerifyAPI.Verify;
  export import AuthVerify = VerifyAPI.AuthVerify;
  export import VerifyCreateParams = VerifyAPI.VerifyCreateParams;
  export import VerifySend = VerifySendAPI.VerifySend;
  export import AuthVerifySend = VerifySendAPI.AuthVerifySend;
  export import VerifySendCreateParams = VerifySendAPI.VerifySendCreateParams;
  export import PasswordReset = PasswordResetAPI.PasswordReset;
  export import AuthPasswordReset = PasswordResetAPI.AuthPasswordReset;
  export import PasswordResetCreateParams = PasswordResetAPI.PasswordResetCreateParams;
  export import PasswordSet = PasswordSetAPI.PasswordSet;
  export import AuthPasswordSet = PasswordSetAPI.AuthPasswordSet;
  export import PasswordSetCreateParams = PasswordSetAPI.PasswordSetCreateParams;
}
