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
import { ModaleComponent } from './AirBnb/shared/modale/modale.component';
import { ModuleComponent } from './AirBnb/module/module.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleModule } from './AirBnb/module/module.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
        FormsModule,

    ]
})
export class AppModule { }
