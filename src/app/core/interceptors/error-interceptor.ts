import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { ErrorStoreService } from '../services/error-store-service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  let _errorStoreService = inject(ErrorStoreService);

  let _router = inject(Router);

  return next(req).pipe(

    catchError((err: HttpErrorResponse) => {


      _errorStoreService.setErrorStatus(err.error.status);
      _errorStoreService.setErrorMessage(err.error.message);


      //console.log(err.error.status);
      //console.log(err.error.message);

      _router.navigate(['/error']);

      return throwError(() => err);



    })




  );//end pipe


}; //end interceptor