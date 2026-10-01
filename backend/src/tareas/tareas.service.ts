import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { Tarea } from './tarea.model';

@Injectable()
export class TareasService {
      constructor(private readonly db: DatabaseService) { }

      async listar(): Promise<Tarea[]> {
            const resultado = await this.db.query<Tarea>(
                  'SELECT id, titulo FROM tareas ORDER BY id',
            );
            return resultado.rows;
      }

      async crear(titulo: string): Promise<Tarea> {
            const resultado = await this.db.query<Tarea>(
                  'INSERT INTO tareas (titulo) VALUES ($1) RETURNING id, titulo',
                  [titulo],
            )
            return resultado.rows[0];
      }
}
