// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core';
import { APIResource } from '../resource';
import * as FeedbackAPI from './feedback';

export class Feedback extends APIResource {
  /**
   * Feedback.
   */
  sendFeedback(body: FeedbackSendFeedbackParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/feedback/send-feedback', { body, ...options });
  }
}

export type SendFeedback = unknown;

export interface FeedbackSendFeedbackParams {
  needs?: FeedbackSendFeedbackParams.Needs;

  uses?: FeedbackSendFeedbackParams.Uses;
}

export namespace FeedbackSendFeedbackParams {
  export interface Needs {
    app_control?: boolean;

    audit?: boolean;

    block_ads?: boolean;

    block_data_brokers?: boolean;

    collaborate?: boolean;

    connect_servers?: boolean;

    focus?: boolean;

    global?: boolean;

    other?: string;

    prevent_cyber?: boolean;

    private?: boolean;

    run_servers?: boolean;

    safe?: boolean;

    visualize?: boolean;

    zero_trust?: boolean;
  }

  export interface Uses {
    business?: boolean;

    personal?: boolean;
  }
}

export namespace Feedback {
  export import SendFeedback = FeedbackAPI.SendFeedback;
  export import FeedbackSendFeedbackParams = FeedbackAPI.FeedbackSendFeedbackParams;
}
