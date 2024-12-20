import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { CVComponent } from './components/cv/cv.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BooksComponent } from './components/books/books.component';
import { ContactComponent } from './components/contact/contact.component';
import { DeleteComponent } from './components/delete/delete.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent, canActivate: [AuthGuard] },
  { path: 'cv', component: CVComponent, canActivate: [AuthGuard] },
  { path: 'cv/new', component: CreateUpdateComponent, canActivate: [AuthGuard] },
  { path: 'cv/:id/edit', component: CreateUpdateComponent, canActivate: [AuthGuard] },
  { path: 'cv/:id/delete', component: DeleteComponent, canActivate: [AuthGuard] },
  { path: 'books', component: BooksComponent, canActivate: [AuthGuard] },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }, // Login bleibt ungeschützt
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
