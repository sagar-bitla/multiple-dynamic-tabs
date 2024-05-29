import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiple-selection-tab',
  templateUrl: './multiple-selection-tab.component.html',
  styleUrls: ['./multiple-selection-tab.component.css']
})
export class MultipleSelectionTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  hobbies : string[]= ['Cricket','Online games','Drawing', 'Singing' ]

  selectedHobbies: string[] = []
  singleHobby:string


  selectHobby(hobbiesName:string){
    const elementIndex = this.selectedHobbies.findIndex(m => m==hobbiesName)   //findIndex method checking hobbiesname present then retuns true
        // findIndex method it returns true or -1

    if(elementIndex==-1){
      this.selectedHobbies.push(hobbiesName)
    }else{
      this.selectedHobbies.splice(elementIndex,1)
    }
  }

  checkIfSelectd(hobbiesName:string){

  // when click on checkifselectd then hobbiesname present then return true and nor present will automatically empty i.e color will be bot showing in ngclass
    return this.selectedHobbies.findIndex(m => m==hobbiesName)
  }

  selectSingleHobby(name:string){
   this.singleHobby=name
  }
}
