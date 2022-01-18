import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchFiveComponent } from './pages-branch-five.component';

describe('PagesBranchFiveComponent', () => {
  let component: PagesBranchFiveComponent;
  let fixture: ComponentFixture<PagesBranchFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
