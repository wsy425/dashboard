import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4900';

export const accountUrl = "http://192.168.43.61:44340"

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'Dashboard',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: accountUrl,
    tokenEndpoint: accountUrl + '/connect/token',
    clientId: 'Dashboard_App',
    requestAccessToken: true,
    dummyClientSecret: '1q2w3e*',
    requireHttps: false,
    scope: 'offline_access Dashboard',
  },
  apis: {
    default: {
      url: accountUrl,
      rootNamespace: 'Dashboard',
    },
  },
} as Environment;
