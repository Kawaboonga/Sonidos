import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SonidosService {
  private baseUrl = 'assets/data/sonidos.json';
  private sonidos: any[] = [];

  constructor(private http: HttpClient) {}

  getSonidos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map(data => {
        this.sonidos = [...data]; // guarda copia para simulación
        return data;
      })
    );
  }

  addSonido(sonido: any): any[] {
    const newId = Math.max(...this.sonidos.map(s => s.id)) + 1;
    const newSonido = { ...sonido, id: newId };
    this.sonidos.push(newSonido);
    return this.sonidos;
  }

  updateSonido(id: number, sonido: any): any[] {
    const index = this.sonidos.findIndex(s => s.id === id);
    if (index !== -1) {
      this.sonidos[index] = { ...this.sonidos[index], ...sonido };
    }
    return this.sonidos;
  }

  deleteSonido(id: number): any[] {
    this.sonidos = this.sonidos.filter(s => s.id !== id);
    return this.sonidos;
  }

  getDataSimulada(): any[] {
    return this.sonidos;
  }
}
