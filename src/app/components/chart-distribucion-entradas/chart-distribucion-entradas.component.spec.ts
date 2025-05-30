import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChartDistribucionEntradasComponent } from './chart-distribucion-entradas.component';

describe('ChartDistribucionEntradasComponent', () => {
  let component: ChartDistribucionEntradasComponent;
  let fixture: ComponentFixture<ChartDistribucionEntradasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDistribucionEntradasComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChartDistribucionEntradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
