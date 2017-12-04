import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import 'rxjs/Rx';
import { setTimeout } from 'timers';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;
  stringDataObservable: Observable<string>;
  nuberDataobservable: Observable<number>;

  stringDataSubscription: Subscription;
  numberDataSubscription: Subscription;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
      );

    this.nuberDataobservable = Observable.interval(1000);
    this.numberDataSubscription = this.nuberDataobservable.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    this.stringDataObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("first packet");
      }, 2000);
      setTimeout(() => {
        observer.next("second packet");
      }, 4000);
      setTimeout(() => {
        observer.next("error occured");
      }, 6000);
    });

    this.stringDataSubscription = this.stringDataObservable.subscribe((data: string) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.numberDataSubscription.unsubscribe();
    this.stringDataSubscription.unsubscribe();
  }

}
