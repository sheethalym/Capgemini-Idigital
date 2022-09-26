import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddOfficeComponent } from './add-office/add-office.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventManagementComponent } from './event-management/event-management.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OfficeListComponent } from './office-list/office-list.component';
import { OfficeSectionComponent } from './office-section/office-section.component';
import { OfficeComponent } from './office/office.component';
import { PlacementOfficeComponent } from './placement-office/placement-office.component';
import { StaffComponent } from './staff/staff.component';
import { StudentComponent } from './student/student.component';
import { TableComponent } from './table/table.component';
const routes: Routes = [
  {path: ' ', component: HomeComponent},
  //{path: 'navbar', component:NavbarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'add-office', component: AddOfficeComponent},
  {path: 'update-office/:id', component: AddOfficeComponent},
  {path: 'Student', component: StudentComponent},
  {path: 'table', component: TableComponent},
  {path: 'admin', component: AdminComponent},
  {path:'dashboard',component:DashboardComponent},
  {path: 'event', component: EventManagementComponent},
  {path: 'staff', component: StaffComponent},
  {path: 'placement', component: PlacementOfficeComponent},
  {path:'office',component:OfficeSectionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



