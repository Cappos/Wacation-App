import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeesComponent} from "./employees/employees.component";
import {FormComponent} from "./form/form.component";
import {CompletedFormsComponent} from "./completed-forms/completed-forms.component";


const appRoutes: Routes = [
    {path: '', component: EmployeesComponent},
    {path: 'form', component: FormComponent},
    {path: 'completed', component: CompletedFormsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}