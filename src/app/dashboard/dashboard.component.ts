import { FullCalendarComponent, CalendarOptions, FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Directive, Input } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import * as FullCalendar from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';

import {
  Component, ElementRef, OnInit
} from '@angular/core';
import {

  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { DatePipe } from '@angular/common';
import { ModalcComponent } from './modalc/modalc.component';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};
interface DateInfo {
  date: string;
}

@Component({
  selector: 'app-dashboard',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})

export class DashboardComponent implements OnInit {
  @ViewChild(ModalcComponent) modal!: ModalcComponent;//bch nadina coomponnet 
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  events: EventInput[] = [];
  calendarOptions!: CalendarOptions;



  currentDate: Date = new Date();//pour fixer card date
  currentTime: Date = new Date();//pour fixer card time

  radio_click: any = "attendance";//bution radio 

  

  constructor(private modalService: BsModalService) {

    setInterval(() => {
      this.currentTime = new Date();
    }, 1000); // Update the time every second
  }

  selectedDate!: DateInfo;
  openModalDashboard(event: any) {
    this.modal.openModal(
      event.start

    );
  }

  ngOnInit(): void {
    const events: EventInput[] = [
      {
        title: 'meet',
        start: '2023-04-10T10:00:00',
        end: '2023-04-10T12:00:00',
        backgroundColor:"red",
        // borderColor:"blue",
          textColor:"black",
          url:"https://meet.google.com/zfp-jarz-jqy",
        

      },
      
    ];
    this.calendarOptions = {
    selectable: true,
    select: (event: any) => {
      this.openModalDashboard(event);
    },
    initialView: 'dayGridMonth',
      events: events
  };

    
  }

  

  
  addEvent(title: string, start: Date, end: Date) {
    const event: EventInput = {
      title: title,
      start: start,
      end: end
    };
    this.events = [...this.events, event];
    this.calendarComponent.getApi().addEvent(event);
  }

  timeLeft: number = 60;
  interval: any;

  startTimer() { //concu pour la card attendance and leave
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  change_radio(ev: any) { //changer radio button 

    this.radio_click = ev;

    console.log(ev);
  }


  //  username :any
  //   firstname:any
  //     lastname:any
  //   picture:any
  //   reclam:any
  //   number:any
  //   Tasksevents:any
  //   countEl:any
  //   breaks:any
  //   tsk:any
  //   smile1 = 0
  //   smile2 = 0
  //   smile3 = 0
  //   smile4 = 0
  //   smile5 = 0
  //   smile6 = 0
  //   datePipe:any
  //   birthdaylast:any
  //   reclamtionById:any
  //   BookingsById:any
  //   slides = [
  //     {'image': 'assets/images/hr1.png'},
  //     {'image': 'assets/images/h2.png'},
  //     {'image': 'assets/images/h4.jpg'},
  //     {'image': 'assets/images/hr5.jpg'},
  //     {'image': 'assets/images/hr6.jpg'}
  //   ];
  //   data:any
  //   userId:any
  //   @ViewChild('date') date!: ElementRef;
  //   constructor(

  //     ){}
  //   events : any[] = [];
  //   events2 : any[] = [];
  //   resEvents:any
  //   options : any;
  //   options2:any
  options3: any
  //   options4:any
  //   extratSttingsGetter:any
  //  async  ngOnInit(){


  //       this.userId = this.data.id
  //           this.Tasksevents="cc"
  //           let len =this.Tasksevents.length
  //           for(var i=0;i<=len-1;i++){
  //           this.options = {
  //               ...this.options,
  //               ...{
  //                   events: "ccc"

  //               }
  //           };
  //           this.options.events.push(this.Tasksevents[i])
  //         }


  //     this.options = {
  //       events: [],
  //             headerToolbar: {
  //                 left: 'prev,next today',
  //                 center: 'title',
  //                 right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //             },
  //             initialView: 'dayGridMonth',
  //             editable: true,
  //             selectable: true,
  //             selectMirror: true,
  //             dayMaxEvents: true,
  //             // eventColor: '#f00 ',
  //             eventTextColor:'red',
  //             eventBorderColor:'orange',
  //             displayEventEnd:'true',
  //             timeZoneParam:'timeZone',
  //             lazyFetching:'true',
  //             themeSystem:'united',
  //             locale:'en',
  //             dateClick: function(info:any) {
  //               alert('Clicked on: ' + info.dateStr);
  //               alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
  //               alert('Current view: ' + info.view.type);
  //               // change the day's background color just for fun
  //               info.dayEl.style.backgroundColor = 'green';
  //             },
  //             fixedMirrorParent: document.body

  //         };
  //             this.resEvents="ghbh"


  //             this.options3 = {
  //                 ...this.options3,
  //                 ...{
  //                     events: "cvbn"

  //                 }
  //             };
  //             this.options3.events.push(this.resEvents[i])


  //             this.options3 = {
  //       events: [],
  //             headerToolbar: {
  //                 left: 'prev,next today',
  //                 center: 'title',
  //                 right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //             },
  //             initialView: 'dayGridMonth',
  //             editable: true,
  //             selectable: true,
  //             selectMirror: true,
  //             dayMaxEvents: true,
  //             // eventColor: '#f00 ',
  //             eventTextColor:'red',
  //             eventBorderColor:'orange',
  //             displayEventEnd:'true',
  //             timeZoneParam:'timeZone',
  //             lazyFetching:'true',
  //             themeSystem:'united',
  //             locale:'en',
  //             dateClick: function(info:any) {
  //               alert('Clicked on: ' + info.dateStr);
  //               alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
  //               alert('Current view: ' + info.view.type);
  //               // change the day's background color just for fun
  //               info.dayEl.style.backgroundColor = 'green';
  //             },
  //             fixedMirrorParent: document.body

  //         };
  // // breaks time for calender


  //       this.resEvents=" nh"


  //       this.options2 = {
  //           ...this.options2,
  //           ...{
  //               events: "fggh"

  //           }
  //       };
  //       this.options.events.push(this.resEvents[i])

  //       this.options2 = {
  // events: [],
  //       headerToolbar: {
  //           left: 'prev,next today',
  //           center: 'title',
  //           right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //       },
  //       initialView: 'dayGridMonth',
  //       editable: true,
  //       selectable: true,
  //       selectMirror: true,
  //       dayMaxEvents: true,
  //       // eventColor: '#f00 ',
  //       eventTextColor:'red',
  //       eventBorderColor:'orange',
  //       displayEventEnd:'true',
  //       timeZoneParam:'timeZone',
  //       lazyFetching:'true',
  //       themeSystem:'united',
  //       locale:'en',
  //       dateClick: function(info:any) {
  //         alert('Clicked on: ' + info.dateStr);
  //         alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
  //         alert('Current view: ' + info.view.type);
  //         // change the day's background color just for fun
  //         info.dayEl.style.backgroundColor = 'green';
  //       },
  //       fixedMirrorParent: document.body

  //   };


  //     this.resEvents="bnn"

  //     this.options4 = {
  //         ...this.options4,
  //         ...{
  //             events: "dfbn"
  //         }
  //     };
  //     this.options.events.push(this.resEvents[i])


  //     this.options4 = {
  //      events: [],
  //     headerToolbar: {
  //         left: 'prev,next today',
  //         center: 'title',
  //         right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  //     },
  //     initialView: 'dayGridMonth',
  //     editable: true,
  //     selectable: true,
  //     selectMirror: true,
  //     dayMaxEvents: true,
  //     // eventColor: '#f00 ',
  //     eventTextColor:'red',
  //     eventBorderColor:'orange',
  //     displayEventEnd:'true',
  //     timeZoneParam:'timeZone',
  //     lazyFetching:'true',
  //     themeSystem:'united',
  //     locale:'en',
  //     dateClick: function(info:any) {
  //       alert('Clicked on: ' + info.dateStr);
  //       alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
  //       alert('Current view: ' + info.view.type);
  //       // change the day's background color just for fun
  //       info.dayEl.style.backgroundColor = 'green';
  //     },
  //     fixedMirrorParent: document.body

  // };

  //   }
  // 	ngAfterViewInit() { }

  //    changebBackground() {
  //     var bg = document.getElementById('bg')!;
  //     bg.style.backgroundImage = "url('../../../../assets/images/background/bg1.jpg')"
  // }
  // changebBackground2() {
  //     var bg = document.getElementById('bg')!;
  //     console.log(bg)
  //     bg.style.backgroundImage = "url('../../../../assets/images/background/bg2.jpg')"
  // }
  // changebBackground3() {
  //     var bg = document.getElementById('bg')!;
  //     console.log(bg)
  //     bg.style.backgroundImage = "url('../../../../assets/images/background/bg3.jpg')"
  // }
  // changebBackground4() {
  //     var bg = document.getElementById('bg')!;
  //     console.log(bg)
  //     bg.style.backgroundImage = "url('../../../../assets/images/background/bg4.jpg')"
  // }
  // changebBackground5() {
  //     var bg = document.getElementById('bg')!;
  //     console.log(bg)
  //     bg.style.backgroundImage = "url('../../../../assets/images/background/bg5.jpg')"
  // }


  //  countvisits() {
  //   this.countEl = document.getElementById("count");
  //  fetch('https://api.countapi.xyz/update/laptop/pad/?amount=1')
  //    .then((res) => res.json())
  //    .then((res) => {
  //      this.countEl.innerHTML = res.value;
  //      alert(this.countEl)
  //    });
  // }




}




