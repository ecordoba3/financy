import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  splash = true;
  constructor() {
    this.inicializeApp();
  }

inicializeApp(){
  if(this.splash){
setTimeout(() => {
  this.splash = false;
}, 7000);



  }
}

}
