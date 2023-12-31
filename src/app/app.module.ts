import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CircleButtonComponent } from './circle-button/circle-button.component';
import { SectionAComponent } from './section-a/section-a.component';
import { SectionBComponent } from './section-b/section-b.component';
import { SquareButtonComponent } from './square-button/square-button.component';
import {NgOptimizedImage} from "@angular/common";
import { ContactMeFormComponent } from './contact-me-form/contact-me-form.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SmallCircleButtonComponent } from './small-circle-button/small-circle-button.component';


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

    ],
    imports: [
        BrowserModule,
        NgbModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
