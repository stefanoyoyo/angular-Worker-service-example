import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  constructor() {
    const worker = new Worker('src/Worker.js');
    // Invio messaggio al worker
    worker.postMessage('ciao');
    // Mi sottoscrivo ai messaggio del worker
    worker.onmessage = (message) => {
      console.log(message)
    }

  }
}
