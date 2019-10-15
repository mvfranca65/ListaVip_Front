import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroConvidadosComponent } from './cadastro-convidados.component';

describe('CadastroConvidadosComponent', () => {
  let component: CadastroConvidadosComponent;
  let fixture: ComponentFixture<CadastroConvidadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroConvidadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroConvidadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
