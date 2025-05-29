import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopConcertsPage } from './top-concerts.page';

describe('TopConcertsPage', () => {
  let component: TopConcertsPage;
  let fixture: ComponentFixture<TopConcertsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TopConcertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
