import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RoutingModule } from './routing.module';
import { DisclosureComponent } from './disclosure/disclosure.component';

@NgModule({
    declarations: [
        AppComponent,
        DisclosureComponent,
        FooterComponent,
        HeaderComponent
    ],
    imports: [
        RoutingModule,
        BrowserModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent, DisclosureComponent]
})
export class AppModule { }
