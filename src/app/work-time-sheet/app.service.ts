import { Injectable } from '@angular/core';

@Injectable()
export class Service {
 
    getVacations(): Vacation[] {
      return vacations;} 
   
    }

    export class Vacation {
      ID!: number
      FullName!: String ;
    
      Team!: String;
    
      Vacationbalance!: number ;
    
      TotaltakenVacation!: number ;
    
      TotalWorkedDays!: number ;
    
      TotalLeaveHours!: number ;
      OffBoardingDate!: Date ;
      TotalAbsenceDays!: number ;
      TotalVacation!: number ;
      TotalPending!: number ;
      PendingWork!:number
    }

    const vacations: Vacation[] = [{
      ID: 1,
      FullName: 'nourbk',
      Team: 'technica',
      Vacationbalance: 11800,
      TotaltakenVacation: 15,
      TotalWorkedDays:30,
      OffBoardingDate:new Date(2022,1,13),
      TotalLeaveHours:0,
      TotalAbsenceDays: 0,
      TotalVacation: 0,
      TotalPending:0,
      PendingWork:0
    }, {
      ID: 4,
      FullName: "nour boukattaya",
      Team: "test",
      Vacationbalance: 16050,
      TotaltakenVacation: 15,
      TotalWorkedDays:30,
      OffBoardingDate: new Date(2022,1,13),
      TotalLeaveHours:0,
      TotalAbsenceDays: 0,
      TotalVacation: 0,
      TotalPending:0,
      PendingWork:0
    }, {
      ID: 5,
      FullName: "ishrak dammak",
      Team: "technical",
      Vacationbalance: 14750,
      TotaltakenVacation: 15,
      TotalWorkedDays:30,
      OffBoardingDate: new Date(2022,1,27),
      TotalLeaveHours:0,
      TotalAbsenceDays: 0,
      TotalVacation: 0,
      TotalPending:0,
      PendingWork:0
    }, {
      ID: 7,
      FullName: "nour",
      Team: "technical",
   
      Vacationbalance: 3725,
      TotaltakenVacation: 15,
      TotalWorkedDays:30,
      OffBoardingDate: new Date(2022,2,10),
      TotalLeaveHours:0,
      TotalAbsenceDays: 0,
      TotalVacation: 0,
      TotalPending:0,
      PendingWork:0
    }, {
      ID: 11,
      FullName: "ishrak",
      Team:"technical",
      Vacationbalance: 7800,
      TotaltakenVacation: 15,
      TotalWorkedDays:30,
      OffBoardingDate: new Date(2022,3,3),
      TotalLeaveHours:0,
      TotalAbsenceDays: 0,
      TotalVacation: 0,
      TotalPending:0,
      PendingWork:0
    },
    {
      ID: 14,
      FullName: "ishrak",
      Team:"technical",
      Vacationbalance: 7800,
      TotaltakenVacation: 15,
      TotalWorkedDays:30,
      OffBoardingDate: new Date(2022,2,17),
      TotalLeaveHours:0,
      TotalAbsenceDays: 0,
      TotalVacation: 0,
      TotalPending:0,
      PendingWork:0
    }];
