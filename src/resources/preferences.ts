// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

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

export declare namespace Preferences {
  export {
    type SetPreferences as SetPreferences,
    type PreferenceSetPreferencesParams as PreferenceSetPreferencesParams,
  };
}
