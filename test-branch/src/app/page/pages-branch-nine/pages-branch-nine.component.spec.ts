import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchNineComponent } from './pages-branch-nine.component';

describe('PagesBranchNineComponent', () => {
  let component: PagesBranchNineComponent;
  let fixture: ComponentFixture<PagesBranchNineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchNineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
