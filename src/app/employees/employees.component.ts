import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

    title = 'Employees';
    displayedColumns = ['no', 'name', 'prevYear', 'currentYear', 'actions'];
    dataSource: MatTableDataSource<EmployeeData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor() {

        const employee: EmployeeData[] = [];
        for (let i = 1; i <= 100; i++) { employee.push(createNewEmployee(i)); }

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(employee);
    }

    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    }

}

function createNewEmployee(id: number): EmployeeData {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];

    return {
        id: id.toString(),
        name: name.name,
        prevYear: new Date().getFullYear() - 1,
        currentYear: new Date().getFullYear()
    };
}

const NAMES = [{"name":"Burton O. Vaughan"},{"name":"Mannix J. Aguilar"},{"name":"Caryn S. Conner"},{"name":"Donovan Mcclain"},{"name":"Kennedy A. Moore"},{"name":"Tasha England"},{"name":"Lysandra I. Estes"},{"name":"Patrick D. Guzman"},{"name":"Gannon J. Pitts"},{"name":"Kelsie X. Molina"},{"name":"Chelsea Salas"},{"name":"Brynne W. Munoz"},{"name":"Caesar R. Pennington"},{"name":"Jamal D. Hall"},{"name":"Prescott U. Stephens"},{"name":"Shad E. Henry"},{"name":"Zeus W. Love"},{"name":"Warren Talley"},{"name":"Nerea Parsons"},{"name":"Echo Stokes"},{"name":"Elizabeth W. Hardy"},{"name":"Tara Arnold"},{"name":"Alma N. Bartlett"},{"name":"Upton Obrien"},{"name":"Rogan R. Herman"},{"name":"Unity Ford"},{"name":"Zena Witt"},{"name":"Denton Forbes"},{"name":"Raphael Case"},{"name":"Shafira Rasmussen"},{"name":"Kylynn Leon"},{"name":"Samson H. Langley"},{"name":"Azalia Durham"},{"name":"Erich X. Collier"},{"name":"Karina Holloway"},{"name":"Wang Schmidt"},{"name":"Xander Whitehead"},{"name":"MacKensie I. Burch"},{"name":"Vincent Olsen"},{"name":"Breanna Le"},{"name":"Erich L. Blair"},{"name":"McKenzie Cooke"},{"name":"Beatrice Vance"},{"name":"Nina E. Moreno"},{"name":"Ursa M. Patterson"},{"name":"Burke Foley"},{"name":"Jana C. Mcbride"},{"name":"Fitzgerald Gilliam"},{"name":"Noah B. Wells"},{"name":"Malachi A. Webb"},{"name":"Elliott Pollard"},{"name":"Kalia Puckett"},{"name":"Charde Bowers"},{"name":"Athena Gardner"},{"name":"Jescie Hayden"},{"name":"Wanda M. Rivers"},{"name":"Daphne Frazier"},{"name":"Price Morse"},{"name":"Althea W. Best"},{"name":"Isabella Morrison"},{"name":"Ashely H. Barry"},{"name":"Lani P. Fowler"},{"name":"Dawn Hayes"},{"name":"Tashya Berg"},{"name":"Justina I. Kidd"},{"name":"Sylvester V. Hahn"},{"name":"Axel Q. Colon"},{"name":"Keaton Ross"},{"name":"Joy Z. Gibbs"},{"name":"Kennan D. Boyle"},{"name":"Guy J. Hurst"},{"name":"Zahir Camacho"},{"name":"Erich X. Petersen"},{"name":"Nevada R. Barry"},{"name":"Phelan O. Page"},{"name":"Malachi Craig"},{"name":"Cora Jimenez"},{"name":"Philip X. Langley"},{"name":"Upton Q. Daniel"},{"name":"Raya V. Larson"},{"name":"Raphael I. Booth"},{"name":"Unity Little"},{"name":"Joelle Everett"},{"name":"Channing T. Meyer"},{"name":"Edward Allen"},{"name":"Victor U. Roach"},{"name":"Ulysses H. Ayala"},{"name":"Emi Q. Nelson"},{"name":"Zena Blackburn"},{"name":"Cheryl Tate"},{"name":"Shad X. Wooten"},{"name":"Xena Barton"},{"name":"Branden Walton"},{"name":"Kareem H. Gallagher"},{"name":"Carlos Blackburn"},{"name":"Theodore Marquez"},{"name":"Troy Beach"},{"name":"Justin X. Garrison"},{"name":"Macaulay Garrett"},{"name":"India B. Mullins"}];

export interface EmployeeData {
    id: string;
    name: string;
    prevYear: number;
    currentYear: number;
}

