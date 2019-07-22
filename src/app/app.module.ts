import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { FiltroProvider } from '../providers/filtro/filtro';
import { LinkExternoProvider } from '../providers/link-externo/link-externo';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    // InAppBrowser
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // InAppBrowser
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FiltroProvider,
    LinkExternoProvider,
    InAppBrowser
  ]
})
export class AppModule {}
