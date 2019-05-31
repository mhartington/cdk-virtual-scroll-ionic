import { Component } from '@angular/core';

import { Plugins, SplashScreenPlugin } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  splashScreen: SplashScreenPlugin;
  constructor() {
    const { SplashScreen } = Plugins;
    this.splashScreen = SplashScreen;
    this.splashScreen.hide();
  }
}
