import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchThreeComponent } from './pages-branch-three.component';

describe('PagesBranchThreeComponent', () => {
  let component: PagesBranchThreeComponent;
  let fixture: ComponentFixture<PagesBranchThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
