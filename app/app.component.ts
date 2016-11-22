import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: '<my-re-table [items]="items" [headers]="headers"></my-re-table>'
})
export class AppComponent {
  items = [ 
    {name:"sbc",id:"10215"},
    {name:"abc",id:"10216"},
    {name:"123",id:"10217"},
    {name:"222",id:"10218"},
    {name:"222",id:"10219"},    {name:"222",id:"10219"},
    {name:"222",id:"10219"},
    {name:"222",id:"10219"},
    {name:"222",id:"10219"},
    {name:"222",id:"10219"},
    {name:"222",id:"10219"},{name:"222",id:"10219"},
    {name:"222",id:"10219"},

  ];

  headers = ['Name', 'Id']

 }
