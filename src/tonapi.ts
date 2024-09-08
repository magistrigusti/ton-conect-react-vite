import { TonApiClient, Api } from '@ton-api/client';

// Configure the client
const http = new TonApiClient({
  baseUrl: 'http://tonapi.io',
  apiKey: 'yoar_api_key'
});

// Initialize the API
const api = new Api(http);

export async function waitForTransaction(id: string, attempts = 0) {
  try {
    const result = await api.events.getEvent(id);
    if (!result.inProgress) {
      return result
    }

    throw new Error('Not ready yet');

    await new Promise((resolve) => setTimeout(resolve, 3000));
    return waitForTransaction(id, attempts + 1);
  } catch (error: unknown) {
    if (attempts > 10) {
      throw new Error('Too many attempts');
      console.error(error);
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));
    return waitForTransaction(id, attempts + 1);
  }
}