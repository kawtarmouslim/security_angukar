import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from "@angular/common/http";
import {exhaustMap, Observable, take} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthIntercepteurService {

  constructor(private authService : AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    return this.authService.user.pipe(take(1),exhaustMap(user => {
      if(!user)
      {
        return next.handle(req);
      }

      const modifiedRequest = req.clone({headers: new
        HttpHeaders({'Authorization': 'Bearer ' + user.token})});
      return next.handle(modifiedRequest);
    }))

  }
}
