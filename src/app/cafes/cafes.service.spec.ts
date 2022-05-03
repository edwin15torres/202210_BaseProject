// COMPONENTE DE PRUEBAS:
import { TestBed, async, inject } from '@angular/core/testing';
import { CafesService } from './cafes.service';
// 13. Testing Http -->aap.component.spect.ts
import { HttpClientTestingModule } from "@angular/common/http/testing";

// 1-) Preparar
describe('Service: Course', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // 13.1 import   --> ir test app.component.spect.ts
      imports: [HttpClientTestingModule],
      providers: [CafesService]
    });
  });

    // 2-)  y 3-) Ejecutar y validar
  it('should ...', inject([CafesService], (service: CafesService) => {
    expect(service).toBeTruthy();
  }));
});
