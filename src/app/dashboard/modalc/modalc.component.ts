import { Output, EventEmitter, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-modalc',
  templateUrl: './modalc.component.html',
  styleUrls: ['./modalc.component.css']
})
export class ModalcComponent {
  radio_click: any = "attendance";//bution radio 
  @Input() showModal: boolean = false;//pour hiden
  constructor() { }

  startdate: any[] = [];
  year: any;
  month: any;
  day: any;


  openModal(e: any) { //e hwa event ili n3edew fih 
    this.showModal = true;
    const inputDate = new Date(e);
    this.year = inputDate.getFullYear();
    this.month = ("0" + (inputDate.getMonth() + 1)).slice(-2); // add leading zero if needed
    this.day = ("0" + inputDate.getDate()).slice(-2); // add leading zero if needed
    const outputDate = `${this.year}-${this.month}-${this.day}`;
    this.startdate.push(outputDate);
  }

  closeModal() {
    this.startdate = [];//bch yraj3 donne far8a 9edima 
    this.showModal = false;
  }

  change_radio(ev: any) { //changer radio button 
    this.radio_click = ev;
  }

}
