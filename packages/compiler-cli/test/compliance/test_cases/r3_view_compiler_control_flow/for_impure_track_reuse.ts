import {Component} from '@angular/core';

@Component({
  template: `
    {#for item of items; track trackFn(item, message)}{{item.name}}{/for}
    {#for otherItem of otherItems; track trackFn(otherItem, message)}{{otherItem.name}}{/for}
  `,
})
export class MyApp {
  message = 'hello';
  items = [{name: 'one'}, {name: 'two'}, {name: 'three'}];
  otherItems = [{name: 'four'}, {name: 'five'}, {name: 'six'}];

  trackFn(item: any, message: string) {
    return message + item.name;
  }

  // TODO(crisbeto): remove this once template type checking is fully implemented.
  item: any;
  otherItem: any;
}
