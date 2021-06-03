import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { MessageResponse } from "./MessageResponse";

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //The code to execute before the requst is sent

    const response$ = next.handle(req);

    //The code to execute after the response has come

    return response$;
  }
}

function isErrorReponse(response: HttpEvent<any>): response is HttpResponse<MessageResponse> {
  return (response as HttpResponse<MessageResponse>).body?.type === "Error";
}
