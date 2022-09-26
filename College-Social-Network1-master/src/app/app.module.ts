
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OfficeService } from './service/office.service';
import { AddOfficeComponent } from './add-office/add-office.component'
import { OfficeListComponent } from './office-list/office-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from  'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { StudentComponent } from './student/student.component';
import { TableComponent } from './table/table.component';
import { EditComponent } from './edit/edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { StaffComponent } from './staff/staff.component';
import { PlacementOfficeComponent } from './placement-office/placement-office.component';
import { OfficeSectionComponent } from './office-section/office-section.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    AddOfficeComponent,
    OfficeListComponent,
    StudentComponent,
    TableComponent,
    EditComponent,
    AdminComponent,
    DashboardComponent,
    EventManagementComponent,
    StaffComponent,
    PlacementOfficeComponent,
    OfficeSectionComponent,
   
    
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,
    MatSnackBarModule,

    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
MatDialogModule,
     
  ],
  providers: [OfficeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

