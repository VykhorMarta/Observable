import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Subscription, Observer } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
secondObservable: Subscription;
customObservable: Subscription;
varible: Subscription;
  ngOnDestroy(): void {
  this.customObservable.unsubscribe();
  this.secondObservable.unsubscribe()
  }
  
  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.customObservable = myNumbers.subscribe(
      (number: number) => {
      console.log(number);
  }
)
    const secondObservable = Observable.create((observer: Observer<string>) =>{
  setTimeout(() => {
    observer.next('first string')
  }, 2000);
  setTimeout(() => {
    observer.next('second string')
  }, 4000)
})

this.secondObservable = secondObservable.subscribe(
  (data: string) => {
    console.log(data);
  }
)



  }

}
