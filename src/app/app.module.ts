import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BigNumberDirective, BigNumberFormat, BigNumberMax, BigNumberMin} from './directives/bignumber/bignumber';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MetamaskService} from './services/web3/web3.service';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BigNumberDirective,
    BigNumberFormat,
    BigNumberMax,
    BigNumberMin
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    MetamaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
