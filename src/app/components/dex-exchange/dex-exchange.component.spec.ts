import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DexExchangeComponent } from './dex-exchange.component';

describe('DexExchangeComponent', () => {
  let component: DexExchangeComponent;
  let fixture: ComponentFixture<DexExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DexExchangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DexExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
