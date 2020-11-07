import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorieInformationPage } from './categorie-information.page';

describe('CategorieInformationPage', () => {
  let component: CategorieInformationPage;
  let fixture: ComponentFixture<CategorieInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorieInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
