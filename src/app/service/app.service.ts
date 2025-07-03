import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class AppSubject {

    setCount = new BehaviorSubject(0);
    updateCount = this.setCount.asObservable()
    numberCount(): Observable<any> {
        return of([1, 2, 3, 4])
    }

    updateData(number: any) {
        this.setCount.next(number)
    }
    searchCall(text: any) {
        console.log(text)
    }

}