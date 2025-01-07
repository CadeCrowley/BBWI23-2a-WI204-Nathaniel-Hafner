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
import {AuthGuardService } from './guards/auth.guard';
import { LogoutComponent } from './components/logout/logout.component';
import { CvDetailResolverService } from './resolvers/cv-detail.resolver';
import { HasChangesGuard } from './guards/has-changes-guard';
import { CvListResolverService } from './resolvers/cv-list.resolver';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent, canActivate: [AuthGuardService] },
  { path: 'cv', component: CVComponent, resolve: {records: CvListResolverService}, canActivate: [AuthGuardService]},
  { path: 'cv/new', component: CreateUpdateComponent, canActivate: [AuthGuardService], canDeactivate: [HasChangesGuard] },
  { path: 'cv/:id/edit', component: CreateUpdateComponent, resolve: {record: CvDetailResolverService}, canActivate: [AuthGuardService], canDeactivate: [HasChangesGuard]},
  { path: 'cv/:id/delete', component: DeleteComponent, resolve: {record: CvDetailResolverService}, canActivate: [AuthGuardService]},
  { path: 'books', component: BooksComponent, canActivate: [AuthGuardService] },
  { path: 'projects', component: ProjectsComponent, canActivate: [AuthGuardService] },
  { path: 'contact', component: ContactComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent }, // Login bleibt ungeschützt
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
