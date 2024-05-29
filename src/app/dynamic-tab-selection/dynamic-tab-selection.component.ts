import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-tab-selection',
  templateUrl: './dynamic-tab-selection.component.html',
  styleUrls: ['./dynamic-tab-selection.component.css']
})
export class DynamicTabSelectionComponent implements OnInit {

  activeTab : string;

  constructor() { }

  ngOnInit(): void {
  }

  //dynamic tab  and sometab disable when user not need
  tabsArray : any[] =[
    {tabName:'Basic Details', isEnabled:true},
    {tabName:'Project Details', isEnabled:false},
    {tabName:'Family Details', isEnabled:true}
  ]

  setSelectedTab(tab){
    //tab is enabled option is true then tab is shown
    if(tab.isEnabled)
    this.activeTab = tab.tabName
  }

}
