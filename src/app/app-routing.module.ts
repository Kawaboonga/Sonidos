import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { AboutComponent } from './components/pages/about/about.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { InstructorComponent } from './components/pages/instructor/instructor.component';
import { CoursesComponent } from './components/pages/courses/courses.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { TermsConditionComponent } from './components/pages/terms-condition/terms-condition.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
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

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'home-two', component: HomeTwoComponent},
    {path: 'about', component: AboutComponent},
    {path: 'appointment', component: AppointmentComponent},
    {path: 'instructor', component: InstructorComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'terms-condition', component: TermsConditionComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'faq', component: FaqComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'services', component: ServicesComponent},
    {path: 'services-details', component: ServicesDetailsComponent},
    {path: 'gallery', component: GalleryComponent},
    {path: 'news', component: NewsComponent},
    {path: 'news-details', component: NewsDetailsComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'cart', component: CartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'products-details', component: ProductsDetailsComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }