import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoraComponent } from './zora.component';

describe('ZoraComponent', () => {
  let component: ZoraComponent;
  let fixture: ComponentFixture<ZoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
