import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPgComponent } from './account-pg.component';

describe('AccountPgComponent', () => {
  let component: AccountPgComponent;
  let fixture: ComponentFixture<AccountPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountPgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
