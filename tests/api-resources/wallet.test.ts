// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Josephsofaer from 'josephsofaer';
import { Response } from 'node-fetch';

const josephsofaer = new Josephsofaer({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource wallet', () => {
  test('balance', async () => {
    const responsePromise = josephsofaer.wallet.balance();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('balance: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(josephsofaer.wallet.balance({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Josephsofaer.NotFoundError,
    );
  });

  test('circleInit', async () => {
    const responsePromise = josephsofaer.wallet.circleInit();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('circleInit: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(josephsofaer.wallet.circleInit({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Josephsofaer.NotFoundError,
    );
  });

  test('circleTransferOut', async () => {
    const responsePromise = josephsofaer.wallet.circleTransferOut({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('validateAddress', async () => {
    const responsePromise = josephsofaer.wallet.validateAddress({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
