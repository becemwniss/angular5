import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from "../Product";

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  @Input() productsList: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

  @Output() clickMe(): void{
    alert("hello World");
  }
  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

}
