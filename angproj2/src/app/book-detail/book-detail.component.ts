import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
  standalone:false

})
export class BookDetailComponent {
  book!:any;
   constructor(private activatedRoute:ActivatedRoute, private bookService:BooksService){ }
   ngOnInit(){
    let id = this.activatedRoute.snapshot.params['id']
    this.bookService.getBook(id).subscribe(res =>  this.book =res)
   }
}
