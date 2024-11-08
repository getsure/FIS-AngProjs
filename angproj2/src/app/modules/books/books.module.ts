import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '../../book-list/book-list.component';
import { BookDetailComponent } from '../../book-detail/book-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'', component:BookListComponent},  //localhost:4200/books
  {path:':id', component:BookDetailComponent} //localhost:4200/books/101
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class BooksModule { }
