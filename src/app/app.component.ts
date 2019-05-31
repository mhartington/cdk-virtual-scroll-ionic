import { Component } from '@angular/core';

import { Plugins, SplashScreenPlugin, StatusBarStyle } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  splashScreen: SplashScreenPlugin;
  constructor() {
    const { SplashScreen, StatusBar } = Plugins;
    this.splashScreen = SplashScreen;
    StatusBar.setStyle({style: StatusBarStyle.Light})
    this.splashScreen.hide();

  }
}
