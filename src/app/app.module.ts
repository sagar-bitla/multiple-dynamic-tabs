import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTabSelectionComponent } from './dynamic-tab-selection/dynamic-tab-selection.component';
import { MultipleSelectionTabComponent } from './multiple-selection-tab/multiple-selection-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTabSelectionComponent,
    MultipleSelectionTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
