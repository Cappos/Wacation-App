import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    MatButtonModule, MatButtonToggleModule, MatCardModule, MatIconModule, MatListModule, MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from "@angular/material";
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import { EmployeesComponent } from './employees/employees.component';
import {AppRoutingModule} from "./app-router.module";
import { FormComponent } from './form/form.component';
import {CompletedFormsComponent} from "./completed-forms/completed-forms.component";


@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        FormComponent,
        CompletedFormsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        // Material
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatMenuModule,
        MatCardModule,
        // Layout
        FlexLayoutModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
