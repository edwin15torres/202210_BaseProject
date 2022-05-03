
// COMPONENTE DE PRUEBAS:
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
//14. Testing Http y comppnente ---> Luego de Faker,  Crear un course.component.spec.ts
import { HttpClientModule } from '@angular/common/http';
import { CafesComponent } from './cafes/cafes.component';

// 1-) Preparar

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule  // 14.1 mod. http

      ],
      declarations: [
        AppComponent,
        CafesComponent // 14.2 mod. course
      ],
    }).compileComponents();
  });

    // 2-)  y 3-) Ejecutar y validar
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Practica_1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Practica_1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Practica_1 app is running!');
  });
});
