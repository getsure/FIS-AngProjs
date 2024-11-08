import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiruComponent } from './chiru.component';

describe('ChiruComponent', () => {
  let component: ChiruComponent;
  let fixture: ComponentFixture<ChiruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChiruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
