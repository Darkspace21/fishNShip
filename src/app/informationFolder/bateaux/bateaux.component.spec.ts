import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BateauxComponent } from './bateaux.component';

describe('BateauxComponent', () => {
  let component: BateauxComponent;
  let fixture: ComponentFixture<BateauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BateauxComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BateauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
