import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { environment } from 'src/environments/environment';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL_API = `${environment.urlGlobal}`;

  username: String
  pass: String 


  idRolUser: String

  

  constructor(private http:HttpClient, public alert: AlertController, private route:Router) { 
    this.username = ''
    this.pass = ''

    this.idRolUser = ''
  }

  tryLogin() {
    let credentials = {
      nombreUsuario: this.username,
      pass: this.pass
    }
    this.http.post(`${this.URL_API}/auth/signin`, credentials).subscribe(
      async (res: any) => {
        if (res.ok) {
          let data = JSON.stringify(res);
          let dataJson = JSON.parse(data);
          localStorage.setItem('token', dataJson.token);
          this.getRole()

          const alert = await this.alert.create({
            cssClass: 'alert-login-true',
            header: 'Hola, Bienvenido/a',
            message: 'Comienza a realizar tus citas',
            buttons: ['OK']
          });
          this.clearData()
          await alert.present();
          this.route.navigate([localStorage.getItem('userRol')])
        } else {
          console.log(res)
          const alert = await this.alert.create({
            cssClass: 'alert-login-false',
            header: 'Credenciales incorrectas',
            message: 'Tu nombre de usuario y/o contraseña no coinciden',
            buttons: ['OK']
          });
          await alert.present();
        }
      },
      err => {
        console.log("Error on login, check server")
        throw err
      }
    )
  }

  loggedIn() {
    if (localStorage.getItem('token')) {
      return true
    } else {
      return false
    }
  }

  clearData() {
    this.username = ''
    this.pass = ''
  }


  getRole() {
    let user:any = jwt_decode(localStorage.getItem('token'));
    let idUser = user.id;

    this.http.get(`${this.URL_API}/usuarios/getUsuario?id=${idUser}`).subscribe(
      (res:any) => {
        this.idRolUser = res.rol
        //next =>
        this.http.get(`${this.URL_API}/roles/getRolName?id=${this.idRolUser}`).subscribe(
          (res:any) => {
            localStorage.setItem('userRol', res.tNombre)
            console.log(res)
          },
          err => {
            console.log("Error al obtener nombre de rol")
            throw err
          }
        )
        console.log(res)
      },
      err => {
        console.log("Eror al consultar usuario por ID")
        throw err
      }
    )
  }



  // alerts -->
  async logout() {
    const confirm = await this.alert.create({
      header: '¿Cerrar sesíon?',
      message: 'Estas apunto de cerrar sesión',
      buttons: [
        {
          text: 'Cerrar Sesión',
          role: 'Ok',
          handler: () => {
            localStorage.removeItem('token')
            localStorage.removeItem('userRol')
            this.route.navigate(['/'])
          }
        },
        {
          text: 'Cancelar',
          role: 'Cancel'
        }
      ]
    });
    await confirm.present();
  }

}
