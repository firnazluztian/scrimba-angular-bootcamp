import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IUser } from '../../app/shared/interfaces';

@Injectable()
export class DataService {

    baseUrl: string = 'https://firnaz-enotes.herokuapp.com/';
    
    constructor(private http: HttpClient) { }

    getUsers() : Observable<IUser[]> {
        return this.http.get<IUser[]>(this.baseUrl + 'users')
            .pipe(catchError(this.handleError))
    }

    private handleError(error: any) {
      console.error('server error:', error);
      if (error.error instanceof Error) {
          const errMessage = error.error.message;
          return Observable.throw(errMessage);
          // Use the following instead if using lite-server
          // return Observable.throw(err.text() || 'backend server error');
      }
      return Observable.throw(error || 'Node.js server error');
    }

}