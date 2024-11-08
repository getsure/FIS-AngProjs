import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css',
  standalone:false

})
export class BookListComponent implements OnInit {
  books!:any;
  constructor(private bookService:BooksService){}
  ngOnInit(){
   this.bookService.getBooks().subscribe(res => this.books =  res)
  }
}
