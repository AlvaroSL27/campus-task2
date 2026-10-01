import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from './tarea.model';

@Injectable({ providedIn: 'root' })
export class TareasService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000';

  listar(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(`${this.apiUrl}/tareas`);
  }
  crear(titulo: string): Observable<Tarea> {
    return this.http.post<Tarea>(`${this.apiUrl}/tareas`, { titulo });
  }
}
