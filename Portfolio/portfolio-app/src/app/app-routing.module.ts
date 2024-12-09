import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CVComponent } from './components/cv/cv.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BooksComponent } from './components/books/books.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateUpdateComponent } from './components/cv/create-update/create-update.component';


const routes: Routes = [
    { path: '', redirectTo: '/about-me', pathMatch: 'full' }, // Startseite
    { path: 'about-me', component: AboutMeComponent },
    { path: 'cv', component: CVComponent },
    { path: 'cv/create-update', component: CreateUpdateComponent },
    { path: '**', redirectTo: '/about-me' }, // Fallback für ungültige URLs
    { path: 'books', component: BooksComponent },
    { path: 'projects', component: ProjectsComponent },
    {path: 'contact', component: ContactComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }