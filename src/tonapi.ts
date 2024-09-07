import { TonApiClient, Api } from '@ton-api/client';
import { Address } from '@ton/core';

// Configure the client
const http = new TonApiClient({
  baseUrl: 'http://tonapi.io',
  apiKey: 'yoar_api_key'
});

// Initialize the API
const api = new Api(http);

//Use the API
async function fetchAccountEvents() {
  const address = Address.parse('your_address_here');

  const events = await api.accounts.getAccountEvents(address, { limit: 50 });
  console.log('Account events:', events)
}

fetchAccountEvents();