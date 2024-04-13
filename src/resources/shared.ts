// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface Balance {
  active_transfer_balances?: Array<Balance.ActiveTransferBalance>;

  balance_byte_count?: number;

  current_subscription?: Balance.CurrentSubscription;

  pending_payout_usd_nano_cents?: number;

  update_time?: string;

  wallet_info?: Balance.WalletInfo;
}

export namespace Balance {
  export interface ActiveTransferBalance {
    balance_byte_count?: number;

    /**
     * udid
     */
    balance_id?: string;

    end_time?: string;

    net_revenue_nano_cents?: number;

    /**
     * udid
     */
    network_id?: string;

    start_balance_byte_count?: number;

    start_time?: string;
  }

  export interface CurrentSubscription {
    plan?: string;

    store?: string;

    /**
     * udid
     */
    subscription_id?: string;
  }

  export interface WalletInfo {
    address?: string;

    balance_usdc_nano_cents?: number;

    blockchain?: 'Polygon';

    blockchain_symbol?: 'MATIC';

    create_date?: string;

    /**
     * udid
     */
    token_id?: string;

    /**
     * udid
     */
    wallet_id?: string;
  }
}
