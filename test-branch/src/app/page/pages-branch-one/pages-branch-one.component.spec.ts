import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchOneComponent } from './pages-branch-one.component';

describe('PagesBranchOneComponent', () => {
  let component: PagesBranchOneComponent;
  let fixture: ComponentFixture<PagesBranchOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
