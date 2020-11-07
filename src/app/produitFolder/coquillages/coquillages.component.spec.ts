import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoquillagesComponent } from './coquillages.component';

describe('CoquillagesComponent', () => {
  let component: CoquillagesComponent;
  let fixture: ComponentFixture<CoquillagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoquillagesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoquillagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
