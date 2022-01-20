import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDivComponent } from './gallery-div.component';

describe('GalleryDivComponent', () => {
  let component: GalleryDivComponent;
  let fixture: ComponentFixture<GalleryDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
