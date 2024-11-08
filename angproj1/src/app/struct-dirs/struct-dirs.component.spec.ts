import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructDirsComponent } from './struct-dirs.component';

describe('StructDirsComponent', () => {
  let component: StructDirsComponent;
  let fixture: ComponentFixture<StructDirsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StructDirsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructDirsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
