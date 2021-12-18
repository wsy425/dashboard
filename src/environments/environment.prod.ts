import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4900';

export const accountUrl = "http://localhost:44395"

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Dashboard',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44395',
    redirectUri: baseUrl,
    clientId: 'Dashboard_App',
    responseType: 'code',
    scope: 'offline_access Dashboard',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44395',
      rootNamespace: 'Dashboard',
    },
  },
} as Environment;
