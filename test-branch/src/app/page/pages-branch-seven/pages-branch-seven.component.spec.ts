import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchSevenComponent } from './pages-branch-seven.component';

describe('PagesBranchSevenComponent', () => {
  let component: PagesBranchSevenComponent;
  let fixture: ComponentFixture<PagesBranchSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
