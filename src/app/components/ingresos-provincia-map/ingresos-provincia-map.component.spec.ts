import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IngresosProvinciaMapComponent } from './ingresos-provincia-map.component';

describe('IngresosProvinciaMapComponent', () => {
  let component: IngresosProvinciaMapComponent;
  let fixture: ComponentFixture<IngresosProvinciaMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresosProvinciaMapComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IngresosProvinciaMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
