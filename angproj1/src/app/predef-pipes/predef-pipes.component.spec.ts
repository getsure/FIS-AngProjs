import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredefPipesComponent } from './predef-pipes.component';

describe('PredefPipesComponent', () => {
  let component: PredefPipesComponent;
  let fixture: ComponentFixture<PredefPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PredefPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredefPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
