import {Component} from '@angular/core';

@Component({
  template: `
    <div>
      {{message}}
      {#for item of items; track item.name[0].toUpperCase()}{{item.name}}{/for}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  items = [{name: 'one'}, {name: 'two'}, {name: 'three'}];
  item: any;  // TODO(crisbeto): remove this once template type checking is fully implemented.
}
