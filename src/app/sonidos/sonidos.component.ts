import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Sonido {
  id: number;
  nombre: string;
  categoria: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

@Component({
  selector: 'app-sonidos',
  templateUrl: './sonidos.component.html',
  //styleUrls: ['./sonidos.component.scss']
})
export class SonidosComponent implements OnInit {
  sonidos: Sonido[] = [];
  isAdmin: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.verificarRol();
    this.cargarSonidos();
  }

  verificarRol(): void {
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    this.isAdmin = user?.role === 'admin';
  }

  cargarSonidos(): void {
    this.http.get<Sonido[]>('assets/data/sonidos.json').subscribe(data => {
      this.sonidos = data;
    });
  }

  agregarNuevo(): void {
    if (!this.isAdmin) return;

    const nuevo: Sonido = {
      id: Date.now(),
      nombre: 'Nuevo sonido',
      categoria: 'Sin categoría',
      descripcion: 'Descripción temporal',
      precio: 0,
      imagen: 'assets/img/trainers/placeholder.jpg'
    };
    this.sonidos.push(nuevo);
    alert('Sonido agregado (en memoria)');
  }

  editar(id: number): void {
    if (!this.isAdmin) return;

    const sonido = this.sonidos.find(s => s.id === id);
    if (sonido) {
      const nuevoNombre = prompt('Nuevo nombre:', sonido.nombre);
      const nuevoPrecio = prompt('Nuevo precio:', sonido.precio.toString());

      if (nuevoNombre) sonido.nombre = nuevoNombre;
      if (nuevoPrecio && !isNaN(+nuevoPrecio)) sonido.precio = +nuevoPrecio;

      alert('Sonido editado (en memoria)');
    }
  }

  eliminar(id: number): void {
    if (!this.isAdmin) return;

    if (confirm('¿Estás seguro de que deseas eliminar este sonido?')) {
      this.sonidos = this.sonidos.filter(s => s.id !== id);
      alert('Sonido eliminado (en memoria)');
    }
  }
}
