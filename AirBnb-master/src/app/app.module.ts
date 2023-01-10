import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './AirBnb/UI/table/table.component';
import { RadioComponent } from './AirBnb/UI/radio/radio.component';
import { CheckboxComponent } from './AirBnb/UI/checkbox/checkbox.component';
import { InputComponent } from './AirBnb/UI/input/input.component';
import { ButtonComponent } from './AirBnb/UI/button/button.component';
import { IconComponent } from './AirBnb/UI/icon/icon.component';
import { CalculatorComponent } from './AirBnb/UI/calculator/calculator.component';
import { CalendarComponent } from './AirBnb/UI/calendar/calendar.component';
import { HomePgComponent } from './AirBnb/module/home-pg/home-pg.component';
import { AccountPgComponent } from './AirBnb/module/account-pg/account-pg.component';
import { OrderedComponent } from './AirBnb/module/ordered/ordered.component';
import { DetailsComponent } from './AirBnb/module/home-pg/details/details.component';
import { SignInComponent } from './AirBnb/module/account-pg/sign-in/sign-in.component';
import { SignUpComponent } from './AirBnb/module/account-pg/sign-up/sign-up.component';
import { OrderedHistoryComponent } from './AirBnb/module/ordered/ordered-history/ordered-history.component';
import { ModaleComponent } from './AirBnb/shared/modale/modale.component';
import { ModuleComponent } from './AirBnb/module/module.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleModule } from './AirBnb/module/module.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
// import { environment } from '../environments/environment';
// import { provideAuth,getAuth } from '@angular/fire/auth';
// import { provideFirestore,getFirestore } from '@angular/fire/firestore';
// import { AngularFireModule } from '@angular/fire/compat';
// import { OrderedPaymentComponent } from './AirBnb/module/ordered/ordered-payment/ordered-payment.component';
import { FormsModule } from '@angular/forms';







const routes:Routes = [
  { path: '', redirectTo:"module" ,pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RadioComponent,
    CheckboxComponent,
    InputComponent,
    ButtonComponent,
    IconComponent,
    CalculatorComponent,
    CalendarComponent,
    ModaleComponent,
    ModuleComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ModuleModule,
    HttpClientModule,
    FontAwesomeModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    FormsModule
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    // provideFirestore(() => getFirestore()),

  
   
  
   
 
   
  ],
})
export class AppModule { }
