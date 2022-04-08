import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {

  usersList: any[]

  nombre: String
  apellido: String
  username: String
  telefono: String
  pass: String
  imgPerfil: String

  constructor(private http: HttpClient) {
    this.nombre = ""
    this.apellido = ""
    this.username = ""
    this.telefono = ""
    this.pass = ""
    this.imgPerfil = ""

    this.usersList = []
    this.http.get('http://localhost:3000/api/usuarios/getUsuarios').subscribe(
      (res: any) => {
        this.usersList = res.usuarios
        console.log(res)
      },
      err => {
        this.usersList = []
      }
    )
  }

  registerClient() {
    let newUser = {
      nombre: this.nombre,
      apellido: this.apellido,
      userName: this.username,
      telefono: this.telefono,
      contrasena: this.pass,
      imgPerfil: this.imgPerfil
    }
    this.http.post('http://localhost:3000/api/usuarios/createUsuario', newUser).subscribe(
      (res: any) => {
        console.log(res)
        console.log("User Register success!")
      },
      err => {
        console.log("User Register error: ")
        throw err
      }
    )
  }

  getUsers() {
    this.usersList = []
    this.http.get('http://localhost:3000/api/usuarios/getUsuarios').subscribe(
      (res: any) => {
        this.usersList = res.usuarios
        console.log(res)
      },
      err => {
        this.usersList = []
        console.log("Error al obtener usuarios")
        throw err
      }
    )
  }

}
