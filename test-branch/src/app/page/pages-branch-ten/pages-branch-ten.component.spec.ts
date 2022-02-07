import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchTenComponent } from './pages-branch-ten.component';

describe('PagesBranchTenComponent', () => {
  let component: PagesBranchTenComponent;
  let fixture: ComponentFixture<PagesBranchTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchTenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
