import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesBranchElevenComponent } from './pages-branch-eleven.component';

describe('PagesBranchElevenComponent', () => {
  let component: PagesBranchElevenComponent;
  let fixture: ComponentFixture<PagesBranchElevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesBranchElevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesBranchElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
