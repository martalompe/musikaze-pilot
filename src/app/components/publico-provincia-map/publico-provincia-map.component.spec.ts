import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublicoProvinciaMapComponent } from './publico-provincia-map.component';

describe('PublicoProvinciaMapComponent', () => {
  let component: PublicoProvinciaMapComponent;
  let fixture: ComponentFixture<PublicoProvinciaMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicoProvinciaMapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublicoProvinciaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
