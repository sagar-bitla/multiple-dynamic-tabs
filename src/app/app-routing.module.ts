import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamicTabSelectionComponent } from './dynamic-tab-selection/dynamic-tab-selection.component';
import { MultipleSelectionTabComponent } from './multiple-selection-tab/multiple-selection-tab.component';

const routes: Routes = [
  {
    path:'dynamic-selection-tab', component:DynamicTabSelectionComponent
  },
  {
    path:'muiltiple-selection',component:MultipleSelectionTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
