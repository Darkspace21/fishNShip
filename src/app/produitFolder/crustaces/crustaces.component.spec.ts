import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrustacesComponent } from './crustaces.component';

describe('CrustacesComponent', () => {
  let component: CrustacesComponent;
  let fixture: ComponentFixture<CrustacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrustacesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrustacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
