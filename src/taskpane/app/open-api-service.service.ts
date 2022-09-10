/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable no-prototype-builtins */
import { Injectable } from "@angular/core";
// import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { map, catchError } from "rxjs/operators";
// import { Subject } from 'rxjs';
// import { throwError } from "rxjs";
// import { CompletionRequest, CompletionResponse } from "./Models/openai.models";

@Injectable()
export class OpenApiServiceService {
  constructor() { }
  // constructor(public http: HttpClient) { }


  // public getOpenAiResponse(request: CompletionRequest): Observable<CompletionResponse> {
  //   let url = "https://api.openai.com/v1/completions";
  //   return this.post<CompletionResponse>(url, request);

  // }

  // public get<T>(url: string, params?: any): Observable<T> {
  //   // return this.http.get<T>(url, { params: this.buildUrlSearchParams(params) });

  //   let response = this.http
  //     .get<T>(url, { params: this.buildUrlSearchParams(params), headers: this.getAuthHeaders() })
  //     .pipe(map(this.extractData), catchError(this.serviceError));

  //   return response;
  // }

  // public getList<T>(url: string, params?: any): Observable<T> {
  //   // return this.http.get<T>(url, { params: this.buildUrlSearchParams(params) });

  //   let response = this.http
  //     .get<T>(url, { params: this.buildUrlSearchParams(params), headers: this.getAuthHeaders() })
  //     .pipe(catchError(this.serviceError));

  //   return response;
  // }

  // public getFull<T>(url: string): Observable<HttpResponse<T>> {
  //   return this.http.get<T>(url, { observe: "response", headers: this.getAuthHeaders() });
  // }

  // public post<T>(url: string, data?: any, params?: any): Observable<T> {
  //   let response = this.http
  //     .post<T>(url, data, { params: params, headers: this.getAuthHeaders() })
  //     .pipe(map(this.extractData), catchError(this.serviceError));
  //   return response;
  // }

  // public put<T>(url: string, data?: any, params?: any): Observable<T> {
  //   let response = this.http
  //     .put<T>(url, data, { params: params, headers: this.getAuthHeaders() })
  //     .pipe(map(this.extractData), catchError(this.serviceError));
  //   return response;
  // }

  // private buildUrlSearchParams(params: any): HttpParams {
  //   let searchParams = new HttpParams();
  //   for (const key in params) {
  //     if (params.hasOwnProperty(key)) {
  //       if (!Array.isArray(params[key])) {
  //         searchParams = searchParams.append(key, params[key]);
  //       } else {
  //         for (var i in params[key]) {
  //           searchParams = searchParams.append(key, params[key][i]);
  //         }
  //       }
  //     }
  //   }
  //   return searchParams;
  // }

  // private getAuthHeaders(): HttpHeaders {
  //   let searchParams = new HttpHeaders();
  //   searchParams = searchParams.append("Authorization", "Bearer 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");
  //   return searchParams;
  // }

  // private extractData(response: any) {
  //   if (response && response.data) return response.data || {};
  //   return response || {};
  // }

  // private serviceError(error: Response | any) {
  //   if (error && error.error) return throwError(error.error);
  //   return throwError(error);
  // }
}
