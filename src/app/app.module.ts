import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    PreloaderComponent,
    FooterComponent,
    NavbarStyleOneComponent,
    NavbarStyleTwoComponent,
    AboutComponent,
    InstructorComponent,
    CoursesComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    NewsComponent,
    NewsDetailsComponent,
    ProductsDetailsComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
