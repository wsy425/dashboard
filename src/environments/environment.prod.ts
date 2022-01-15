import { Environment } from '@abp/ng.core';

// 项目自身地址
const baseUrl = 'http://localhost:4900';
// 登录、权限、mySQL文件下载地址
export const accountUrl = "http://192.168.43.61:44340"
// signalR数据传输地址
export const hubServerUrl = "http://192.168.31.11:5002"
// 发送数据地址
export const transmitUrl = "http://192.168.43.61:48888"

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'TPL智能故障诊断系统',
    logoUrl: 'assets/TPLlogo.png',
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
