import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})



export class UsuariosServiceService {

  usersList: any[]

  readonly URL_API = `${environment.urlGlobal}`;

  nombre: String
  apellido: String
  username: String
  telefono: String
  pass: String
  newPass: String

  constructor(private http: HttpClient, private alert:AlertController, private route: Router) {
    this.nombre = ""
    this.apellido = ""
    this.username = ""
    this.telefono = ""
    this.pass = ""
    this.newPass = ''

    this.usersList = []
  }

  

  getUsers() {
    this.usersList = []
    this.http.get(`${this.URL_API}/usaurios/getUsuarios`).subscribe(
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

  async updatePass() {
    let user:any = jwt_decode(localStorage.getItem('token'));
    let idUser = user.id;
    let passWords = {
      id: idUser,
      pass: this.pass,
      newPass: this.newPass
    }
    const confirm = await this.alert.create({
      header: '¿Actualizar contraseña?',
      message: 'Estas apunto de actualizar la contraseña',
      buttons: [
        {
          text: 'Actualizar',
          role: 'Ok',
          handler: () => {
            this.http.post(`${this.URL_API}/usuarios/updatePass`, passWords).subscribe(
              async (res:any) => {
                console.log(res)
                if (res.ok) {
                  const alert = await this.alert.create({
                    cssClass: 'alert-login-true',
                    header: 'Cerraando sesión...',
                    message: 'Vuelve a iniciar sesión',
                    buttons: ['OK']
                  });
                  await alert.present();
                  localStorage.removeItem('token')
                  localStorage.removeItem('userRol')
                  this.route.navigate(['/'])
                } else {
                  const alert = await this.alert.create({
                    cssClass: 'alert-login-true',
                    header: 'Contraseña incorrecta',
                    message: 'Intenta nuevamente',
                    buttons: ['OK']
                  });
                  await alert.present();
                }
              }
            )
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
