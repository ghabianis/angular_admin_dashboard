import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TablesComponent } from './tables/tables.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { MatDialogModule } from "@angular/material";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DatePipe } from '@angular/common';
import interactionPlugin from '@fullcalendar/interaction'; // Import the interaction plugin
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { ModalcComponent } from './dashboard/modalc/modalc.component';
import { ChartjComponent } from './chartj/chartj.component';
import { ServiceComponent } from './dashboard/service/service.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//slider work time sheett
import { MyAttendanceComponent } from './my-attendance/my-attendance.component';
// import { TableDevextremeComponent } from './table-devextreme/table-devextreme.component';


import { NgChartsModule } from 'ng2-charts';//pour chart
import { WorkTimeSheetComponent } from './work-time-sheet/work-time-sheet.component'; //pour chart js 
import { DxRangeSelectorModule, DxDataGridModule,DxNumberBoxModule } from 'devextreme-angular';
//import {  Vacation,Service } from 'src/app/table-devextreme/app.service';
import { Vacation, Service } from 'src/app/work-time-sheet/app.service';
import { Order,Servicet } from './table-devextreme/table.service';
import {
  DxDataGridComponent,
  //DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
} from 'devextreme-angular';
import { TableDevextremeComponent } from './table-devextreme/table-devextreme.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SettingsComponent,
    TablesComponent,
    SigninComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ButtonsComponent,
    FormsComponent,
    ModalcComponent,
    ChartjComponent,
    ServiceComponent,
    MyAttendanceComponent,

    WorkTimeSheetComponent,
    TableDevextremeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientTestingModule,// Import the HttpClientTestingModule here
    FullCalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,

    }),
    NgbModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
    DxRangeSelectorModule,
    DxDataGridModule,
    DxNumberBoxModule ,
    DxSelectBoxModule,

    
    
    
	  

  ],
  providers: [ Service,DatePipe,Servicet],

  bootstrap: [AppComponent]


})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);