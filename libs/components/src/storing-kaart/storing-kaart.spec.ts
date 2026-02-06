import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringKaart }from './storing-kaart';

describe('CustomList', () => {
  let component: StoringKaart;
  let fixture: ComponentFixture<StoringKaart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoringKaart],
    }).compileComponents();

    fixture = TestBed.createComponent(StoringKaart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
