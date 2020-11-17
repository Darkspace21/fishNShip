import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Information } from '../information.model';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  informations: Information[];
  category:string;
  information:Information;

  constructor(private activatedRoute: ActivatedRoute,
    public informationService: InformationService) {

  }

  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    console.log(this.category);

    this.getInformations();

  }

  getInformations(){
    this.informationService.getInformations().subscribe(resp=>{
      this.informations = resp;
      console.log(this.informations);
    });
  }

  sortChange(value:Information){
    this.information = value;
  }

}
