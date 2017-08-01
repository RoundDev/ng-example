import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersBannerComponent } from './players-banner.component';

describe('PlayersBannerComponent', () => {
  let component: PlayersBannerComponent;
  let fixture: ComponentFixture<PlayersBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
