import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchEightComponent } from './pages-branch-eight.component';

describe('PagesBranchEightComponent', () => {
  let component: PagesBranchEightComponent;
  let fixture: ComponentFixture<PagesBranchEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
