import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  clientes = [
    {
    "Apellidos": "Arcila",
    "Casado": false,
    "Direccion": "Calle 35 a 40",
    "Nombre": "Diego",
    "Teléfono": "3859720",
    },
    {
      "Apellidos": "Bueno",
      "Casado": false,
      "Direccion": "CR 16A # 53 28",
      "Nombre": "Kevin",
      "Teléfono": "31485579954",
      },
      {
        "Apellidos": "Palomino",
        "Casado": false,
        "Direccion": "CR 25 # 52 33",
        "Nombre": "Natalia",
        "Teléfono": "3225594555",
        },
  ]
}
