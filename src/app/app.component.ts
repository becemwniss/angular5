import {Component} from '@angular/core';
import {Article} from './article/article.model';
import {Product} from "./Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET',
        'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT',
        'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log("product was picked", product);
  }


  // articles: Article[];
  //
  // constructor() {
  //   this.articles = [
  //     new Article('Angular 2', 'http://angular.io', 3),
  //     new Article('Fullstack', 'http://fullstack.io', 2),
  //     new Article('Angular Homepage', 'http://angular.io', 1),
  //   ];
  // }
  //
  // addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  //   console.log(title.value + ' ' + link.value);
  //   this.articles.push(new Article(title.value, link.value, 0));
  //   title.value = '';
  //   link.value = '';
  //   return false;
  // }
  //
  // sortedArticles(): Article[] {
  //   return this.articles.sort((a: Article, b: Article) => a.votes - b.votes);
  // }
}
