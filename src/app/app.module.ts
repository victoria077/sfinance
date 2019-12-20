import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { GeneralComponent } from './general/general.component';
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ManagementComponent } from './management/management.component';
import {Routes, RouterModule} from '@angular/router';
import { IndicatorsComponent } from './indicators/indicators.component';
import { TextMaskModule } from 'angular2-text-mask';

const appRoutes: Routes =[
  { path: '', component: GeneralComponent},
  { path: 'management', component: ManagementComponent},
  { path: 'indicators', component: IndicatorsComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GeneralComponent,
    ManagementComponent,
    IndicatorsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    RouterModule.forRoot(appRoutes),
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
