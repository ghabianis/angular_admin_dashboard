import { Injectable } from '@angular/core';

export class Order {
  ID!: number
    date!: Date ;
    From!: string;
  
    To!: string;
  
    Type!: String ;
  
    Status!: String ;
    LastUpdate!: String ;
}

const orders: Order[] = [
  {ID: 14,
    date:new Date(2022,2,17),
    From: "12:20",
    To: "11:30",
    Type: "home" ,
    Status: "rejected" ,
    LastUpdate: "ishrak yesterday" },

    {
      ID:3,
      date:new Date(2022,3,6),
      From: "12:20",
      To: "11:30",
      Type: "home" ,
      Status: "rejected" ,
      LastUpdate: "ishrak Monday 12-01-2022 11.30" },

      {ID:19,
        date:new Date(2022,1,15),
        From: "8:20",
        To: "14:30",
        Type: "home" ,
        Status: "rejected" ,
        LastUpdate: "nour Monday 16-01-2022 11.30" }
   

  ];

@Injectable()
export class Servicet {
  getOrders(): Order[] {
    return orders;
  }
}
