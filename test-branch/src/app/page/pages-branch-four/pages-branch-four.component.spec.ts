import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchFourComponent } from './pages-branch-four.component';

describe('PagesBranchFourComponent', () => {
  let component: PagesBranchFourComponent;
  let fixture: ComponentFixture<PagesBranchFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
