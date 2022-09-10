/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Component, Inject, AfterViewInit } from "@angular/core";
import { CompletionRequest, CompletionResponse } from "./Models/openai.models";
import { HttpClient, HttpResponse, HttpParams, HttpHeaders, HttpXhrBackend } from "@angular/common/http";
import { catchError, ignoreElements, map, Observable, throwError } from "rxjs";
import { CommonModule } from "@angular/common";

/* global Word */

@Component({
  selector: "app-home",
  templateUrl: "./app.component.html",
})
export default class AppComponent implements AfterViewInit {
  welcomeMessage = "Bem vindo";
  isLoading = false;

  apiToken = "";
  model = "text-davinci-002";
  top_p = 1;
  max_tokens = 350;
  temperature = 1;
  frequency_penalty = 0;
  presence_penalty = 0;
  n = 3;
  stop = "";
  http: HttpClient;
  constructor() {
    this.http = new HttpClient(
      new HttpXhrBackend({
        build: () => new XMLHttpRequest(),
      })
    );
  }

  ngAfterViewInit() {
    //  if(document.getElementById("fabricInit"))
    //   document.getElementById("fabricInit").remove();
    // var fabricInit = document.createElement("script");
    // fabricInit.setAttribute("id", "fabricInit");
    // fabricInit.setAttribute("src", "assets/js/fabric_init.js");
    // document.body.appendChild(fabricInit);
  }

  public getOpenAiResponse(request: CompletionRequest): Observable<CompletionResponse> {
    let url = "https://api.openai.com/v1/completions";
    return this.post<CompletionResponse>(url, request);
  }

  public get<T>(url: string, params?: any): Observable<T> {
    // return this.http.get<T>(url, { params: this.buildUrlSearchParams(params) });

    let response = this.http
      .get<T>(url, { params: this.buildUrlSearchParams(params), headers: this.getAuthHeaders() })
      .pipe(map(this.extractData), catchError(this.serviceError));

    return response;
  }

  public getList<T>(url: string, params?: any): Observable<T> {
    // return this.http.get<T>(url, { params: this.buildUrlSearchParams(params) });

    let response = this.http
      .get<T>(url, { params: this.buildUrlSearchParams(params), headers: this.getAuthHeaders() })
      .pipe(catchError(this.serviceError));

    return response;
  }

  public getFull<T>(url: string): Observable<HttpResponse<T>> {
    return this.http.get<T>(url, { observe: "response", headers: this.getAuthHeaders() });
  }

  public post<T>(url: string, data?: any, params?: any): Observable<T> {
    console.log("post", url, data, params);
    let response = this.http
      .post<T>(url, data, { headers: this.getAuthHeaders() })
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  public put<T>(url: string, data?: any, params?: any): Observable<T> {
    let response = this.http
      .put<T>(url, data, { params: params, headers: this.getAuthHeaders() })
      .pipe(map(this.extractData), catchError(this.serviceError));
    return response;
  }

  private buildUrlSearchParams(params: any): HttpParams {
    let searchParams = new HttpParams();
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        if (!Array.isArray(params[key])) {
          searchParams = searchParams.append(key, params[key]);
        } else {
          for (var i in params[key]) {
            searchParams = searchParams.append(key, params[key][i]);
          }
        }
      }
    }
    return searchParams;
  }

  private getAuthHeaders(): HttpHeaders {
    let searchParams = new HttpHeaders();
    searchParams = searchParams.append("Authorization", "Bearer " + this.apiToken);
    return searchParams;
  }

  private extractData(response: any) {
    if (response && response.data) return response.data || {};
    return response || {};
  }

  private serviceError(error: Response | any) {
    if (error && error.error) return throwError(error.error);
    return throwError(error);
  }

  async insertOpenaiResponse() {
    return Word.run(async (context) => {
      this.isLoading = true;
      var selectedText = context.document.getSelection();
      selectedText.load("text");
      await context.sync();
      var text = selectedText.text;

      var request: CompletionRequest = {
        model: this.model,
        prompt: text.trim(),
        max_tokens: +this.max_tokens,
        top_p: +this.top_p,
        temperature: +this.temperature,
        n: +this.n,
        frequency_penalty: +this.frequency_penalty,
        presence_penalty: +this.presence_penalty,
        stop: this.stop.length == 0 ? null : this.stop.split(","),
      };
      // const paragraph = context.document.body.insertParagraph(response.choices[0].text.replace('\\n', '\n'), Word.InsertLocation.end);
      // paragraph.font.color = "blue";
      console.log("request", request);
      this.getOpenAiResponse(request).subscribe(async (response: CompletionResponse) => {
        console.log("response", response);
        var colorList = [
          "blue",
          "red",
          "green",
          "orange",
          "purple",
          "pink",
          "brown",
          "black",
          "gray",
          "cyan",
          "magenta",
          "lime",
          "teal",
          "aqua",
          "maroon",
          "olive",
          "navy",
        ];
        for (var i = 0; i < response.choices.length; i++) {
          var txtSplit = this.adicionaNewLines(response.choices[i].text).split("|NL|");
          if (txtSplit.length == 0) continue;
          for (var j = 0; j < txtSplit.length; j++) {
            if (txtSplit[j].trim() == "") continue;
            var paragraph = context.document.body.insertParagraph(txtSplit[j], Word.InsertLocation.end);
            paragraph.font.color = colorList[i % colorList.length];
            //paragraph.font.highlightColor = complementaryColorList[i % complementaryColorList.length];
          }
        }
        await context.sync();
        this.isLoading = false;
      });
    });
  }
  adicionaNewLines(texto: string): string {
    let content1 = texto.replace(/\r\n/g, "|NL|");
    let content2 = content1.replace(/\n\r/g, "|NL|");
    let content3 = content2.replace(/\n/g, "|NL|");
    let content4 = content3.replace(/\r/g, "|NL|");

    return content4;
  }
}
