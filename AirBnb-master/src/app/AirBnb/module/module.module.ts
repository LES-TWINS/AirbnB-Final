import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountPgComponent } from "./account-pg/account-pg.component";
import { SignInComponent } from "./account-pg/sign-in/sign-in.component";
import { SignUpComponent } from "./account-pg/sign-up/sign-up.component";
import { DetailsComponent } from "./home-pg/details/details.component";
import { HomePgComponent } from "./home-pg/home-pg.component";
import { ModuleComponent } from "./module.component";
import { OrderedHistoryComponent } from "./ordered/ordered-history/ordered-history.component";
import { OrderedComponent } from "./ordered/ordered.component";
import { HeaderComponent } from './home-pg/header/header.component';
import { MainComponent } from './home-pg/main/main.component';
import { LogoComponent } from './home-pg/header/logo/logo.component';
import { SearchComponent } from './home-pg/header/search/search.component';
import { UserComponent } from './home-pg/header/user/user.component';
import { FooterComponent } from './home-pg/footer/footer.component';
import { AboutComponent } from './home-pg/footer/about/about.component';
import { SupportComponent } from './home-pg/footer/support/support.component';
import { CardComponent } from './home-pg/main/card/card.component';
import {MatCardModule} from '@angular/material/card';
import { NavigationComponent } from './home-pg/main/navigation/navigation.component';
import { SliderComponent } from './home-pg/main/navigation/slider/slider.component';
import { FilterComponent } from './home-pg/main/navigation/filter/filter.component'; 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickOutsideDirective } from "./home-pg/header/user/clickOutside.directive";
import { ErrorComponent } from "./error/error.component";
import { FilterContentComponent } from './home-pg/main/navigation/filter/filter-content/filter-content.component';
import { FilterContentHeaderComponent } from './home-pg/main/navigation/filter/filter-content/filter-content-header/filter-content-header.component';
import { FilterContentMainComponent } from './home-pg/main/navigation/filter/filter-content/filter-content-main/filter-content-main.component';
import { TypeOfPlaceComponent } from './home-pg/main/navigation/filter/filter-content/filter-content-main/type-of-place/type-of-place.component';
import { RoomsAndBedsComponent } from './home-pg/main/navigation/filter/filter-content/filter-content-main/rooms-and-beds/rooms-and-beds.component';
import { AmenitesComponent } from './home-pg/main/navigation/filter/filter-content/filter-content-main/amenites/amenites.component';
import { LanguagesComponent } from './home-pg/main/navigation/filter/filter-content/filter-content-main/languages/languages.component';
import { PropertyTypeComponent } from './home-pg/main/navigation/filter/filter-content/filter-content-main/property-type/property-type.component';
import { PriceRangeComponent } from './home-pg/main/navigation/filter/filter-content/filter-content-main/price-range/price-range.component';
import { FilterContentFooterComponent } from './home-pg/main/navigation/filter/filter-content/filter-content-footer/filter-content-footer.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule} from "@angular/material/form-field";
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { NgScrolltopModule } from 'ng-scrolltop';
import { gsap } from "gsap";
import {Draggable} from "gsap/Draggable";
import {ScrollTrigger} from "gsap/ScrollTrigger";



const routes:Routes = [
    { path: '',  component:ModuleComponent,children:[  
    { path: 'account-pg', component:AccountPgComponent},
    { path: 'home-pg', component:HomePgComponent},
    { path: 'ordered', component:OrderedComponent},
    { path:'home-pg/details/:name/:id',component:DetailsComponent},
    { path:'**',component:ErrorComponent},

  
  ]},
    
  ]

@NgModule({
    declarations: [
        HomePgComponent,
        AccountPgComponent,
        OrderedComponent,
        DetailsComponent,
        SignInComponent,
        SignUpComponent,
        OrderedHistoryComponent,
        HeaderComponent,
        MainComponent,
        LogoComponent,
        SearchComponent,
        UserComponent,
        FooterComponent,
        AboutComponent,
        SupportComponent,
        CardComponent,
        NavigationComponent,
        SliderComponent,
        FilterComponent,
        ClickOutsideDirective,
        FilterContentComponent,
        FilterContentHeaderComponent,
        FilterContentMainComponent,
        TypeOfPlaceComponent,
        RoomsAndBedsComponent,
        AmenitesComponent,
        LanguagesComponent,
        PropertyTypeComponent,
        PriceRangeComponent,
        FilterContentFooterComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
        MatCardModule,
        CarouselModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        MatDatepickerModule,
        MatButtonModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule,
        NgScrolltopModule,
       

        
    
   
    ]
})

export class ModuleModule{

}