import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorieProduitPage } from './categorie-produit.page';

describe('CategorieProduitPage', () => {
  let component: CategorieProduitPage;
  let fixture: ComponentFixture<CategorieProduitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieProduitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorieProduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
