import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bateaux',
  templateUrl: './bateaux.component.html',
  styleUrls: ['./bateaux.component.scss'],
})
export class BateauxComponent implements OnInit {

  constructor() { 
    
  }

  change(Value:object) {
    console.log(Value);
  } 
  

  ngOnInit() {
    
  }

}
