import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { PreloaderComponent } from './components/common/preloader/preloader.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { NavbarStyleOneComponent } from './components/common/navbar-style-one/navbar-style-one.component';
import { NavbarStyleTwoComponent } from './components/common/navbar-style-two/navbar-style-two.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { InstructorComponent } from './components/pages/instructor/instructor.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { TermsConditionComponent } from './components/pages/terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServicesDetailsComponent } from './components/pages/services-details/services-details.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { NewsComponent } from './components/pages/news/news.component';
import { NewsDetailsComponent } from './components/pages/news-details/news-details.component';
import { ShopComponent } from './components/pages/shop/shop.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ProductsDetailsComponent } from './components/pages/products-details/products-details.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    HomeTwoComponent,
    PreloaderComponent,
    FooterComponent,
    NavbarStyleOneComponent,
    NavbarStyleTwoComponent,
    AboutComponent,
    AppointmentComponent,
    InstructorComponent,
    CoursesComponent,
    PricingComponent,
    TestimonialsComponent,
    TermsConditionComponent,
    PrivacyPolicyComponent,
    ErrorComponent,
    LoginComponent,
    RegisterComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    GalleryComponent,
    NewsComponent,
    NewsDetailsComponent,
    ShopComponent,
    CartComponent,
    CheckoutComponent,
    ProductsDetailsComponent,
    ContactComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
