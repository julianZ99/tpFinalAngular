import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletModalComponent } from './wallet-modal.component';

describe('WalletModalComponent', () => {
  let component: WalletModalComponent;
  let fixture: ComponentFixture<WalletModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalletModalComponent]
    });
    fixture = TestBed.createComponent(WalletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
