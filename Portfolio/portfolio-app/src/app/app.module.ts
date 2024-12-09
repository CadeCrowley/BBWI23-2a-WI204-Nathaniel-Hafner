import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CVComponent } from './components/cv/cv.component';
import { ContactComponent } from './components/contact/contact.component';
import { BooksComponent } from './components/books/books.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUpdateComponent } from './components/cv/create-update/create-update.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    CVComponent,
    ContactComponent,
    BooksComponent,
    ProjectsComponent,
    CreateUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
