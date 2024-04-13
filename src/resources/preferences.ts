// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '@stainless-temp/josephsofaer/core';
import { APIResource } from '@stainless-temp/josephsofaer/resource';
import * as PreferencesAPI from '@stainless-temp/josephsofaer/resources/preferences';

export class Preferences extends APIResource {
  /**
   * Set account preferences.
   */
  setPreferences(
    body: PreferenceSetPreferencesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.post('/preferences/set-preferences', { body, ...options });
  }
}

export type SetPreferences = unknown;

export interface PreferenceSetPreferencesParams {
  product_updates?: boolean;
}

export namespace Preferences {
  export import SetPreferences = PreferencesAPI.SetPreferences;
  export import PreferenceSetPreferencesParams = PreferencesAPI.PreferenceSetPreferencesParams;
}
