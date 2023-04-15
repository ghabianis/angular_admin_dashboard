import { Component, OnInit } from '@angular/core';
import {enableProdMode,ViewChild } from '@angular/core';
import { Vacation, Service } from 'src/app/work-time-sheet/app.service';
import { DatePipe } from '@angular/common';
import { DxDataGridComponent } from 'devextreme-angular';

@Component({
  selector: 'app-work-time-sheet',
  templateUrl: './work-time-sheet.component.html',
  styleUrls: ['./work-time-sheet.component.css'],
  preserveWhitespaces: true,

})
export class WorkTimeSheetComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;
  title = 'filter';
  statuses =["2022-01-31 - 2023-04-15","2023-02-01 - 2023-02-05","2023-04-10 - 2023-04-20"]
  
  
  tasks:any
  saleAmountHeaderFilter: any;

  currentFilter: any;

  showFilterRow: boolean;

  showHeaderFilter: boolean;
  startValue: Date = new Date(2021, 12, 31);

  endValue: Date = new Date();

  start:any = this.datePipe.transform(this.startValue, "yyyy-MM-dd");
  end:any = this.datePipe.transform(this.endValue, "yyyy-MM-dd");

  selectedStartValue: Date = new Date(2021, 12, 31);

  selectedEndValue: Date = new Date(2022, 2, 1);

  vacations: Vacation[];

  selectedVacations!: Vacation[];
  selected!:any [];


  tableTitles: string[] = ['Fullname',  'Team',  'Vacation balance',
  'Total taken Vacation', 'Total Worked Days' , 'Total Leave Hours' , 'Off Boarding Date' , 'Total Absence Days','Total Vacation', 'Total Pending' , 'pending work'];


  onValueChanged(e: { value: Date[]; }) {
    const selectedVacations: any[] = [];
   this.start = this.datePipe.transform(e.value[0], "yyyy-MM-dd") ;
    this.end = this.datePipe.transform(e.value[1], "yyyy-MM-dd");
    this.vacations.forEach((item,index) => {
      if (item. OffBoardingDate >= e.value[0] && item. OffBoardingDate <= e.value[1]) {
        selectedVacations.push(item);
      }
    });

    this.selectedVacations = selectedVacations;
  }



  constructor(service: Service,private datePipe: DatePipe) {
    

    this.vacations = service.getVacations();

    this.selectedVacations=this.vacations;
    this.showFilterRow = true;
    this.showHeaderFilter = false;
   
    this.saleAmountHeaderFilter = [{
      text: 'Less than $3000',
      value: ['SaleAmount', '<', 3000],
    }, {
      text: '$3000 - $5000',
      value: [
        ['SaleAmount', '>=', 3000],
        ['SaleAmount', '<', 5000],
      ],
    }, {
      text: '$5000 - $10000',
      value: [
        ['SaleAmount', '>=', 5000],
        ['SaleAmount', '<', 10000],
      ],
    }, {
      text: '$10000 - $20000',
      value: [
        ['SaleAmount', '>=', 10000],
        ['SaleAmount', '<', 20000],
      ],
    }, {
      text: 'Greater than $20000',
      value: ['SaleAmount', '>=', 20000],
    }];
   // this.currentFilter = this.applyFilterTypes[0].key;
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
    
    this.tasks = {
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks',
        key: 'Task_ID',
      },
      expand: 'ResponsibleEmployee',
      select: [
        'Task_ID',
        'Task_Subject',
        'Task_Start_Date',
        'Task_Due_Date',
        'Task_Status',
        'Task_Priority',
        'ResponsibleEmployee/Employee_Full_Name',
      ],
    };
  }
  sett:any[]=[];
  ngOnInit(): void {
    this.statuses.forEach((item,index) => {
     
      

this.sett.push(item)
    });
  }
  onSelectValueChanged(e: { value: string; }) {
    const selectedVacations: any[] = [];


    const dateRange = e.value;
    const dates = dateRange.split(" - ");
    const startDate =  new Date(dates[0]) ;
    const endDate = new Date(dates[1]);
    console.log(startDate,endDate)

   
   this.start = this.datePipe.transform(e.value[0], "yyyy-MM-dd") ;
    this.end = this.datePipe.transform(e.value[1], "yyyy-MM-dd");
    this.vacations.forEach((item,index) => {
     
      if (item. OffBoardingDate >= startDate && item. OffBoardingDate <= endDate) {
        selectedVacations.push(item);
      }     

    });
    this.selectedVacations = selectedVacations;

  }

  selectStatus(data:any) {
    if (data.value == 'All') {
      this.dataGrid.instance.clearFilter();
    } else {
      this.dataGrid.instance.filter(['Task_Status', '=', data.value]);
    }
  }

  
  



  private static getOrderDay(rowData: any) {
    return (new Date(rowData.OrderDate)).getDay();
  }

  calculateFilterExpression(value: any, selectedFilterOperations : any, target:any) {
    const column = this as any;
    if (target === 'headerFilter' && value === 'weekends') {
      return [[WorkTimeSheetComponent.getOrderDay, '=', 0], 'or', [WorkTimeSheetComponent.getOrderDay, '=', 6]];
    }
    return column.defaultCalculateFilterExpression.apply(this, arguments);
  }

  orderHeaderFilter(data:any) {
    data.dataSource.postProcess = (results:any) => {
      results.push({
        text: 'Weekends',
        value: 'weekends',
      });
      return results;
    };
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }

}
