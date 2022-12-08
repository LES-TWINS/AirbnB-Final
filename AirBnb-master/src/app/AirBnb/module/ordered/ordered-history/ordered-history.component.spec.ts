import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedHistoryComponent } from './ordered-history.component';

describe('OrderedHistoryComponent', () => {
  let component: OrderedHistoryComponent;
  let fixture: ComponentFixture<OrderedHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderedHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderedHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
