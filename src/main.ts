import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));

// 响应式改变HTML的font-size，即rem对应的px值
function remSize() {
  const deviceWidth = document.body.clientWidth
  // 在1920px宽的设计稿里10px=1rem
  document.documentElement.style.fontSize = (deviceWidth / 192) + 'px'
}
remSize()
window.onresize = () => {
  remSize()
}