import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4900';

export const accountUrl = "http://192.168.43.61:44340"

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'Dashboard',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://192.168.43.61:44340',
    redirectUri: baseUrl,
    clientId: 'Dashboard_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone Dashboard',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'http://192.168.43.61:44340',
      rootNamespace: 'Dashboard',
    },
  },
} as Environment;
