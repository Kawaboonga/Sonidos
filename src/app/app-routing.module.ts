import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { AboutComponent } from './components/pages/about/about.component';
import { InstructorComponent } from './components/pages/instructor/instructor.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { NewsComponent } from './components/pages/news/news.component';
import { NewsDetailsComponent } from './components/pages/news-details/news-details.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'about', component: AboutComponent},
    {path: 'instructor', component: InstructorComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'news', component: NewsComponent},
    {path: 'news-details', component: NewsDetailsComponent},
    {path: 'products-details', component: ProductsDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }