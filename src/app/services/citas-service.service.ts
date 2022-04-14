import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class CitasServiceService {
  citasList: any[]
  serviciosList: any[]

  titular: String
  numero: String
  fechacita: String
  hora: String
  service: String
  mascota: String
  SearchText: String

  constructor(private http: HttpClient, public alert:AlertController) {

    this.titular = ""
    this.numero = ""
    this.fechacita = ""
    this.hora = ""
    this.service = ""
    this.mascota = ""
    this.SearchText = ""
    
    this.citasList = []
    this.http.get('http://localhost:3000/api/citas/getCitas').subscribe(
      (res:any)=>{
        this.citasList = res.citas
        console.log(res.citas)
      },
      err=>{
        this.citasList = []
        console.log("Error en obtener citas: "+err)
      }
    )
  }
  async agendarCita() {
    const confirm = await this.alert.create({
      header: 'Aviso',
      message: '¿Deseas agendar tu cita?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          handler: () => {
            this.limpiarDatos();
          }
        },
        {
          text: 'Aceptar',
          role: 'Ok',
          handler: () => {
            this.registerCita();
          }
        }
      ]
    });
    await confirm.present();  
  }

  async editarCita() {
    const confirm = await this.alert.create({
      header: 'Aviso',
      message: '¿Deseas modificar tu cita?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
        },
        {
          text: 'Aceptar',
          role: 'Ok',
          handler: () => {
          }
        }
      ]
    });
    await confirm.present();  
  }

  async desactivarCita() {
    const confirm = await this.alert.create({
      header: 'Aviso',
      message: '¿Deseas desactivar tu cita?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
        },
        {
          text: 'Aceptar',
          role: 'Ok',
          handler: () => {
          }
        }
      ]
    });
    await confirm.present();  
  }

  deleteCita(id,status){
    console.log(id,status)
    this.http.delete('http://localhost:3000/api/citas/deleteCita?idCita='+ id + '&status='+status).subscribe(
      (res:any)=>{
        console.log(res)
      },
      err=> {
        console.log(err)
        throw err
      }
    )
  }

  getServicios(){
    this.http.get('http://localhost:3000/api/servicios/getServicios').subscribe(
      (res:any)=>{
        this.serviciosList = res.servicios
        console.log(res)
      },
      err =>{
        this.serviciosList = []
        console.log("Error en obtener Servicios: "+err)
      }
    )
  }
  getCitas() {
    this.http.get('http://localhost:3000/api/citas/getCitas').subscribe(
      (res:any)=>{
        this.citasList = res.citas
        console.log(res)
      },
      err =>{
        this.citasList = []
        console.log("Error en obtener citas: "+err)
      }
    )
  }

  registerCita() {
    let newCita = {
      titular: this.titular,
      telefono: this.numero,
      fechaCita: this.fechacita,
      servicio: this.service,
      hora: this.hora,
      mascota: this.mascota 
    }
    console.log(newCita)
    this.http.post('http://localhost:3000/api/citas/createCita', newCita).subscribe(
      (res:any) => {
        this.citasList = res
      },
      err => {
        this.citasList = []
      }
    )
    this.limpiarDatos()
  }

  limpiarDatos(){
    this.titular = ""
    this.numero = ""
    this.fechacita = ""
    this.hora = ""
    this.service = ""
    this.mascota = ""
  }
  
}

