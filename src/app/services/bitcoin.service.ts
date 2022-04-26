import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, of } from 'rxjs';
import { __values } from 'tslib';



@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  // private _currency$ = new BehaviorSubject<any>('')
  // public currency$ = this._currency$.asObservable()

  constructor(private http: HttpClient) { }

  public getRate(coins: number) {
    return this.http.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
      .pipe(map(res => {
        console.log('res bitcoin', res);
        return res
      }))
    // this._currency$.next(currency)
  }

}