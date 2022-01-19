import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchSixComponent } from './pages-branch-six.component';

describe('PagesBranchSixComponent', () => {
  let component: PagesBranchSixComponent;
  let fixture: ComponentFixture<PagesBranchSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
