import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



describe('ProdutosFiltroResultadosComponent', () => {
  let component: ProdutosFiltroResultadosComponent;
  let fixture: ComponentFixture<ProdutosFiltroResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[SharedModule,   ReactiveFormsModule, FormsModule],
      declarations: [ ProdutosFiltroResultadosComponent ]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosFiltroResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
