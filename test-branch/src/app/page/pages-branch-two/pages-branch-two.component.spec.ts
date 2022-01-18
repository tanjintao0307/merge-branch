import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchTwoComponent } from './pages-branch-two.component';

describe('PagesBranchTwoComponent', () => {
  let component: PagesBranchTwoComponent;
  let fixture: ComponentFixture<PagesBranchTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
