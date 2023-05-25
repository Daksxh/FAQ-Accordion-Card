import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FAQ-accordion-card';

  onClick(e:any)
  {
    let elm = <HTMLButtonElement>document.querySelector('#'+e.delegateTarget.id)

    if (elm.classList.contains('collapsed'))
    {
      elm.classList.remove('active')
    }
    else
    {
      elm.classList.add('active')
    }
  }
}
