import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
/**
 * 在main.ts上加上 import {enableProdMode} from '@angular/core'
 * 在bootstrap前面加上enableProdMode();
 * 运行 ionic build Android --prod, 这样启动的速度就会达到5s左右
 */
import {enableProdMode} from '@angular/core';
enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
