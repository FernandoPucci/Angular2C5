import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(
    private router: Router
  ) { }

  searchCriteria: string = null;
  itemSelected: any = null;
  newItem: any = null;

  onSaveItem_Click(e) {
    this.newItem = e;
  }

  onSelect_Click(e) {

    this.itemSelected = e;
  }
  onSearch(e) {
   // this.searchCriteria = e;
  }

  onAlgo_Changed(e){
    console.log(e.value);
  }



  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);

  }

}
