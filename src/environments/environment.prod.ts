import { Environment } from '@abp/ng.core';

// 项目自身地址
const baseUrl = 'http://localhost:4900';
// 登录、权限
export const accountUrl = "http://120.26.2.197:44340"
// 文件传输
export const fileUrl = "http://120.26.2.197:44352"
// signalR数据传输地址
export const hubServerUrl = "http://120.26.2.197:45001"
// 发送数据地址
export const transmitUrl = "http://120.26.2.197:48888"

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
