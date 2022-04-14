import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { alertController } from '@ionic/core';
@Injectable({
  providedIn: 'root'
})
export class ServiciosServiceService {
serviciosList: any[] = [];
nombre: string
descripcion:string
costo:number
tiempo: string

  constructor(
    private http: HttpClient
  )
   {
    this.nombre =""
    this.descripcion=""
    this.costo = 0
    this.tiempo=""
   }
  getServicios(){

    this.http.get('http://localhost:3000/api/servicios/getServicios').subscribe(

      (res:any)=>{
        this.serviciosList = res.servicios
        console.log(res)
      },
      err=>{
        this.serviciosList = []
      }
    )
  }
  crearServicio(){
let newservices={
nombre: this.nombre,
  descripcion:this.descripcion,
  costo:this.costo,
  tiempo:this.tiempo,

}
console.log(newservices)
    this.http.post('http://localhost:3000/api/servicios/createServicio',newservices).subscribe(

      (res:any)=>{
        this.serviciosList = res
      },
      err=>{
        this.serviciosList = []
      }
    )
  }
  desactivarServicio(
    id,status
  ){
    console.log(id,status)
    this.http.delete('http://localhost:3000/api/servicios/deleteServicio?idServicio='+ id + '&status='+status).subscribe(
      (res:any)=>{
      console.log(res)
      },
      err=> {
        console.log(err)
      throw err
      }
    )
  }
  alertaDelete(id,bUsuarioActivo){
    const alert = document.createElement('ion-alert');

    alert.cssClass = 'my-custom-class';

    alert.header = 'Atencion';

    alert.message = `Desea <strong>${bUsuarioActivo ? 'Activar':'Desactivar'}</strong> este usuario?`;

    alert.buttons = [

      {

        text: 'Cancel',

        role: 'cancel',

        cssClass: 'secondary',

        handler: (blah) => {

          console.log('Confirm Cancel: blah');

        },

      },

      {

        text: 'Okay',

        handler: () => {

          console.log('Confirm Okay');

          this.desactivarServicio(id,bUsuarioActivo);

           

        },

      },

    ];

 

    document.body.appendChild(alert);

    return alert.present();

  }
}

