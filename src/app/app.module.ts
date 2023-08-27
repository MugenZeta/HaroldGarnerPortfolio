import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CircleButtonComponent } from './circle-button/circle-button.component';
import { SectionAComponent } from './section-a/section-a.component';
import { SectionBComponent } from './section-b/section-b.component';
import { SquareButtonComponent } from './square-button/square-button.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CircleButtonComponent,
    SectionAComponent,
    SectionBComponent,
    SquareButtonComponent,
    ImageLoaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
