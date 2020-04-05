import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
export type HandleError =
  <T> (result?: T) => (error: HttpErrorResponse) => Observable<T>;

/** Handles HttpClient errors */
@Injectable()
export class HttpErrorHandler {

  /** Create curried handleError function */
  createHandleError = () => <T>
    (result = {} as T) => this.handleError(result)

  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param result - optional value to return as the observable result
   */
  handleError<T>(result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);

      const message = (error.error instanceof ErrorEvent) ?
        error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;

      console.error(message);

      return of( result );
    };

  }
}

