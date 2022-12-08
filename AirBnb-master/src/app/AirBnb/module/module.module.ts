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
    ],
    imports: [
        RouterModule.forRoot(routes)
      ]
 
  })

export class ModuleModule{

}