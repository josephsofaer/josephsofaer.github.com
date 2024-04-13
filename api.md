# Shared

Types:

- <code><a href="./src/resources/shared.ts">Balance</a></code>

# Stats

## Last90

Types:

- <code><a href="./src/resources/stats/last-90.ts">StatsLast90</a></code>

Methods:

- <code title="get /stats/last-90">client.stats.last90.<a href="./src/resources/stats/last-90.ts">retrieve</a>() -> StatsLast90</code>

## ProvidersOverviewLast90

Types:

- <code><a href="./src/resources/stats/providers-overview-last-90.ts">StatsProvidersOverviewLast90</a></code>

Methods:

- <code title="get /stats/providers-overview-last-90">client.stats.providersOverviewLast90.<a href="./src/resources/stats/providers-overview-last-90.ts">retrieve</a>() -> StatsProvidersOverviewLast90</code>

## Providers

Types:

- <code><a href="./src/resources/stats/providers.ts">StatsProviders</a></code>

Methods:

- <code title="get /stats/providers">client.stats.providers.<a href="./src/resources/stats/providers.ts">retrieve</a>() -> StatsProviders</code>

## ProviderLast90

Types:

- <code><a href="./src/resources/stats/provider-last-90.ts">StatsProviderLast90</a></code>

Methods:

- <code title="post /stats/provider-last-90">client.stats.providerLast90.<a href="./src/resources/stats/provider-last-90.ts">create</a>({ ...params }) -> StatsProviderLast90</code>

# Auth

Types:

- <code><a href="./src/resources/auth/auth.ts">CodeCreate</a></code>
- <code><a href="./src/resources/auth/auth.ts">CodeLogin</a></code>
- <code><a href="./src/resources/auth/auth.ts">NetworkCheck</a></code>
- <code><a href="./src/resources/auth/auth.ts">NetworkCreate</a></code>

Methods:

- <code title="post /auth/code-create">client.auth.<a href="./src/resources/auth/auth.ts">codeCreate</a>({ ...params }) -> CodeCreate</code>
- <code title="post /auth/code-login">client.auth.<a href="./src/resources/auth/auth.ts">codeLogin</a>({ ...params }) -> CodeLogin</code>
- <code title="post /auth/network-check">client.auth.<a href="./src/resources/auth/auth.ts">networkCheck</a>({ ...params }) -> NetworkCheck</code>
- <code title="post /auth/network-create">client.auth.<a href="./src/resources/auth/auth.ts">networkCreate</a>({ ...params }) -> NetworkCreate</code>

## Login

Types:

- <code><a href="./src/resources/auth/login.ts">AuthLogin</a></code>

Methods:

- <code title="post /auth/login">client.auth.login.<a href="./src/resources/auth/login.ts">create</a>({ ...params }) -> AuthLogin</code>

## LoginWithPassword

Types:

- <code><a href="./src/resources/auth/login-with-password.ts">AuthLoginWithPassword</a></code>

Methods:

- <code title="post /auth/login-with-password">client.auth.loginWithPassword.<a href="./src/resources/auth/login-with-password.ts">create</a>({ ...params }) -> AuthLoginWithPassword</code>

## Verify

Types:

- <code><a href="./src/resources/auth/verify.ts">AuthVerify</a></code>

Methods:

- <code title="post /auth/verify">client.auth.verify.<a href="./src/resources/auth/verify.ts">create</a>({ ...params }) -> AuthVerify</code>

## VerifySend

Types:

- <code><a href="./src/resources/auth/verify-send.ts">AuthVerifySend</a></code>

Methods:

- <code title="post /auth/verify-send">client.auth.verifySend.<a href="./src/resources/auth/verify-send.ts">create</a>({ ...params }) -> AuthVerifySend</code>

## PasswordReset

Types:

- <code><a href="./src/resources/auth/password-reset.ts">AuthPasswordReset</a></code>

Methods:

- <code title="post /auth/password-reset">client.auth.passwordReset.<a href="./src/resources/auth/password-reset.ts">create</a>({ ...params }) -> AuthPasswordReset</code>

## PasswordSet

Types:

- <code><a href="./src/resources/auth/password-set.ts">AuthPasswordSet</a></code>

Methods:

- <code title="post /auth/password-set">client.auth.passwordSet.<a href="./src/resources/auth/password-set.ts">create</a>({ ...params }) -> unknown</code>

# Network

Types:

- <code><a href="./src/resources/network.ts">AuthClient</a></code>
- <code><a href="./src/resources/network.ts">Clients</a></code>
- <code><a href="./src/resources/network.ts">CreateProviderSpec</a></code>
- <code><a href="./src/resources/network.ts">FindLocations</a></code>
- <code><a href="./src/resources/network.ts">FindProviderLocations</a></code>
- <code><a href="./src/resources/network.ts">FindProviders</a></code>
- <code><a href="./src/resources/network.ts">FindProviders2</a></code>
- <code><a href="./src/resources/network.ts">ProviderLocations</a></code>
- <code><a href="./src/resources/network.ts">RemoveClient</a></code>

Methods:

- <code title="post /network/auth-client">client.network.<a href="./src/resources/network.ts">authClient</a>({ ...params }) -> AuthClient</code>
- <code title="get /network/clients">client.network.<a href="./src/resources/network.ts">clientsList</a>() -> Clients</code>
- <code title="post /network/create-provider-spec">client.network.<a href="./src/resources/network.ts">createProviderSpec</a>({ ...params }) -> CreateProviderSpec</code>
- <code title="post /network/find-locations">client.network.<a href="./src/resources/network.ts">findLocations</a>({ ...params }) -> FindLocations</code>
- <code title="post /network/find-provider-locations">client.network.<a href="./src/resources/network.ts">findProviderLocations</a>({ ...params }) -> FindLocations</code>
- <code title="post /network/find-providers">client.network.<a href="./src/resources/network.ts">findProviders</a>({ ...params }) -> FindProviders</code>
- <code title="post /network/find-providers2">client.network.<a href="./src/resources/network.ts">findProviders2</a>({ ...params }) -> FindProviders2</code>
- <code title="get /network/provider-locations">client.network.<a href="./src/resources/network.ts">providerLocationsList</a>() -> FindLocations</code>
- <code title="post /network/remove-client">client.network.<a href="./src/resources/network.ts">removeClient</a>({ ...params }) -> RemoveClient</code>

# Preferences

Types:

- <code><a href="./src/resources/preferences.ts">SetPreferences</a></code>

Methods:

- <code title="post /preferences/set-preferences">client.preferences.<a href="./src/resources/preferences.ts">setPreferences</a>({ ...params }) -> unknown</code>

# Feedback

Types:

- <code><a href="./src/resources/feedback.ts">SendFeedback</a></code>

Methods:

- <code title="post /feedback/send-feedback">client.feedback.<a href="./src/resources/feedback.ts">sendFeedback</a>({ ...params }) -> unknown</code>

# Wallet

Types:

- <code><a href="./src/resources/wallet.ts">CircleInit</a></code>
- <code><a href="./src/resources/wallet.ts">CircleTransferOut</a></code>
- <code><a href="./src/resources/wallet.ts">ValidateAddress</a></code>
- <code><a href="./src/resources/wallet.ts">WalletBalanceResponse</a></code>

Methods:

- <code title="get /wallet/balance">client.wallet.<a href="./src/resources/wallet.ts">balance</a>() -> WalletBalanceResponse</code>
- <code title="post /wallet/circle-init">client.wallet.<a href="./src/resources/wallet.ts">circleInit</a>() -> CircleInit</code>
- <code title="post /wallet/circle-transfer-out">client.wallet.<a href="./src/resources/wallet.ts">circleTransferOut</a>({ ...params }) -> CircleTransferOut</code>
- <code title="post /wallet/validate-address">client.wallet.<a href="./src/resources/wallet.ts">validateAddress</a>({ ...params }) -> ValidateAddress</code>

# Subscription

Types:

- <code><a href="./src/resources/subscription.ts">CheckBalanceCode</a></code>
- <code><a href="./src/resources/subscription.ts">CreatePaymentID</a></code>
- <code><a href="./src/resources/subscription.ts">RedeemBalanceCode</a></code>

Methods:

- <code title="get /subscription/balance">client.subscription.<a href="./src/resources/subscription.ts">balance</a>() -> Balance</code>
- <code title="post /subscription/check-balance-code">client.subscription.<a href="./src/resources/subscription.ts">checkBalanceCode</a>({ ...params }) -> CheckBalanceCode</code>
- <code title="post /subscription/create-payment-id">client.subscription.<a href="./src/resources/subscription.ts">createPaymentId</a>() -> CreatePaymentID</code>
- <code title="post /subscription/redeem-balance-code">client.subscription.<a href="./src/resources/subscription.ts">redeemBalanceCode</a>({ ...params }) -> RedeemBalanceCode</code>

# Devices

Types:

- <code><a href="./src/resources/devices.ts">AddDevice</a></code>
- <code><a href="./src/resources/devices.ts">AdoptStatus</a></code>
- <code><a href="./src/resources/devices.ts">ConfirmAdopt</a></code>
- <code><a href="./src/resources/devices.ts">ConfirmShare</a></code>
- <code><a href="./src/resources/devices.ts">CreateAdoptCode</a></code>
- <code><a href="./src/resources/devices.ts">CreateShareCode</a></code>
- <code><a href="./src/resources/devices.ts">RemoveAdoptCode</a></code>
- <code><a href="./src/resources/devices.ts">SetName</a></code>
- <code><a href="./src/resources/devices.ts">SetProvide</a></code>
- <code><a href="./src/resources/devices.ts">ShareStatus</a></code>

Methods:

- <code title="post /device/add">client.devices.<a href="./src/resources/devices.ts">add</a>({ ...params }) -> AddDevice</code>
- <code title="post /device/confirm-share">client.devices.<a href="./src/resources/devices.ts">confirmShare</a>({ ...params }) -> ConfirmShare</code>
- <code title="post /device/create-adopt-code">client.devices.<a href="./src/resources/devices.ts">createAdoptCode</a>({ ...params }) -> CreateAdoptCode</code>
- <code title="post /device/create-share-code">client.devices.<a href="./src/resources/devices.ts">createShareCode</a>({ ...params }) -> CreateShareCode</code>
- <code title="get /device/adopt-code/{code}/qr.png">client.devices.<a href="./src/resources/devices.ts">qrPng</a>(code) -> Response</code>
- <code title="post /device/share-status">client.devices.<a href="./src/resources/devices.ts">shareStatus</a>({ ...params }) -> ShareStatus</code>

# Device

Types:

- <code><a href="./src/resources/device/device.ts">RemoveAssociation</a></code>
- <code><a href="./src/resources/device/device.ts">SetAssociationName</a></code>

Methods:

- <code title="post /device/adopt-status">client.device.<a href="./src/resources/device/device.ts">adoptStatus</a>({ ...params }) -> AdoptStatus</code>
- <code title="post /device/confirm-adopt">client.device.<a href="./src/resources/device/device.ts">confirmAdopt</a>({ ...params }) -> ConfirmAdopt</code>
- <code title="post /device/remove-adopt-code">client.device.<a href="./src/resources/device/device.ts">removeAdoptCode</a>({ ...params }) -> RemoveAdoptCode</code>
- <code title="post /device/remove-association">client.device.<a href="./src/resources/device/device.ts">removeAssociation</a>({ ...params }) -> RemoveAssociation</code>
- <code title="post /device/set-association-name">client.device.<a href="./src/resources/device/device.ts">setAssociationName</a>({ ...params }) -> SetAssociationName</code>
- <code title="post /device/set-name">client.device.<a href="./src/resources/device/device.ts">setName</a>({ ...params }) -> SetName</code>
- <code title="post /device/set-provide">client.device.<a href="./src/resources/device/device.ts">setProvide</a>({ ...params }) -> SetProvide</code>

## Associations

Types:

- <code><a href="./src/resources/device/associations.ts">DeviceAssociations</a></code>

Methods:

- <code title="get /device/associations">client.device.associations.<a href="./src/resources/device/associations.ts">list</a>() -> DeviceAssociations</code>
