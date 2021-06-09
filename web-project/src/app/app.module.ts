import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';





import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SomethingComponent } from './something/something.component';

import {CrystalLightboxModule} from '@crystalui/angular-lightbox';

import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NatureimageComponent } from './natureimage/natureimage.component';
import { UrbanimageComponent } from './urbanimage/urbanimage.component';
import { LandscapeimageComponent } from './landscapeimage/landscapeimage.component';
import { AbstractimageComponent } from './abstractimage/abstractimage.component';
import { TravelimageComponent } from './travelimage/travelimage.component';
import { VideosComponent } from './videos/videos.component';
import { NatureHomeComponent } from './homebuttoncomponents/nature-home/nature-home.component';

import { MatListModule} from '@angular/material/list';

import {MatSidenavModule} from '@angular/material/sidenav';
import { ContactUsFormComponent } from './contact-us-form/contact-us-form.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {environment} from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SomethingComponent,
    NatureimageComponent,
    UrbanimageComponent,
    LandscapeimageComponent,
    AbstractimageComponent,
    TravelimageComponent,
    VideosComponent,
    NatureHomeComponent,
    ContactUsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NgbModule,
    CrystalLightboxModule,
    Ng2PageScrollModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
