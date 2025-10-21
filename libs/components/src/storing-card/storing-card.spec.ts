import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringCard }from './storing-card';

describe('CustomList', () => {
  let component: StoringCard;
  let fixture: ComponentFixture<StoringCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoringCard],
    }).compileComponents();

    fixture = TestBed.createComponent(StoringCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
