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



const routes:Routes = [
    { path: '',  component:ModuleComponent,children:[  
    { path: 'account-pg', component:AccountPgComponent},
    { path: 'home-pg', component:HomePgComponent},
    { path: 'ordered', component:OrderedComponent}]},
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
      
    ],
    imports: [
        RouterModule.forRoot(routes),
        MatCardModule,
        CarouselModule,
        BrowserAnimationsModule
      ]
 
  })

export class ModuleModule{

}