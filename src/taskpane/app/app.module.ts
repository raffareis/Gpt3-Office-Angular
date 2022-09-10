/* eslint-disable prettier/prettier */
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { OpenApiServiceService } from "./open-api-service.service";
import { FormsModule } from "@angular/forms";

import AppComponent from "./app.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule,CommonModule],
  bootstrap: [AppComponent],
  providers: [HttpClient, OpenApiServiceService],
})
export default class AppModule { }
