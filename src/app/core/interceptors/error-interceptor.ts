import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { ErrorRespuesta } from '../models/dtos';
import { ErrorStorageService } from '../services/error-storage-service';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {

  let _errorStorageService = inject(ErrorStorageService);

  let _router = Inject(Router);

  return next(req).pipe(

    catchError((err:HttpErrorResponse) => {

      _errorStorageService.setError({

        status: err.status,
        message:err.message
          
      })

    }));

    _router.navigate(['error'])

};
