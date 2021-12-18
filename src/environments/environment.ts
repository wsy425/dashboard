import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4900';

export const accountUrl = "http://localhost:44395"

export const environment = {
  production: false,
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
    scope: 'offline_access openid profile role email phone Dashboard',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44395',
      rootNamespace: 'Dashboard',
    },
  },
} as Environment;
