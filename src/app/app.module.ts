import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import { importProvidersFrom } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CircleButtonComponent } from './circle-button/circle-button.component';
import { SectionAComponent } from './section-a/section-a.component';
import { SectionBComponent } from './section-b/section-b.component';
import { SquareButtonComponent } from './square-button/square-button.component';
import { ContactMeFormComponent } from './contact-me-form/contact-me-form.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SmallCircleButtonComponent } from './small-circle-button/small-circle-button.component';
import { IconSpreadComponent } from './icon-spread/icon-spread.component';


@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        CircleButtonComponent,
        SectionAComponent,
        SectionBComponent,
        SquareButtonComponent,
        ContactMeFormComponent,
        ProjectCardComponent,
        SmallCircleButtonComponent,
        IconSpreadComponent,

    ],
    imports: [
        BrowserModule,
        NgbModule,
        NgOptimizedImage
    ],
  providers: [importProvidersFrom(HttpClientModule)],
  bootstrap: [AppComponent]
})
export class AppModule { }
