import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  nombre:String
  apellido:String
  username:String
  telefono:String
  fechaRegistro:String
  codpersonal:String
  pass:String
  rolEmployee:String
  empleadoslist: any[]
  alertController: any;

  idRol:String

  constructor(private http: HttpClient) { 
    this.nombre=""
    this.apellido=""
    this.username=""
    this.telefono=""
    this.fechaRegistro=""
    this.codpersonal=""
    this.rolEmployee=""
    this.pass=""
    this.empleadoslist=[]
    this.getEmployees();

    this.idRol = ''
  }

  alertaDelete(id,bUsuarioActivo){
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Atencion';
    alert.message = `Desea <strong>${!bUsuarioActivo ? 'Activar':'Desactivar'}</strong> este usuario?`;
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
          this.deleteEmpleado(id,bUsuarioActivo);
           
        },
      },
    ];
  
    document.body.appendChild(alert);
    return alert.present();
  }
  
  deleteEmpleado(id, bUsuarioActivo){
    this.http.delete(`http://localhost:3000/api/usuarios/delete/?id=${id}&bUsuarioActivo=${!bUsuarioActivo}`).subscribe(
      (res:any)=>{
        this.getEmployees();
      },
      err=>{
        console.log("Error al desactivar empleado")
        throw err
      }
      );
    
    
  }

  getEmployees() {
    this.empleadoslist = []
    this.http.get('http://localhost:3000/api/usuarios/getUsuarios').subscribe(
      (resUser: any) => {
        console.log(resUser.usuarios)
        console.log("ID ROL: "+this.idRol)
        this.empleadoslist = resUser.usuarios
        this.getRolId()
      },
      err => {
        this.empleadoslist = []
        console.log("Error al obtener usuarios")
        throw err
      }
    )
  }

  getRolId() {
    this.http.get('http://localhost:3000/api/roles/getRolId?nameRol=employee').subscribe(
          (res:any) => {
            this.rolEmployee = res._id
            console.log("RESPONSE ROLES: "+res)
          },
          err => {
            console.log("Error al obtener nombre ROL")
            throw err
          }
        )
  }

  presentAlertConfirm() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Confirm!';
    alert.message = 'Message <strong>text</strong>!!!';
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
          this.registerEmployee();
           
        },
      },
    ];
  
    document.body.appendChild(alert);
    return alert.present();
  }

  async confirmacion() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Alert';
    alert.subHeader = 'Subtitle';
    alert.message = 'Se ha registrado el empleado correctamente.';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    await alert.present();
  
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async alertaCampos() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Alert';
    alert.subHeader = 'Subtitle';
    alert.message = 'Favor de rellenar todos los campos.';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    await alert.present();
  
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


  registerEmployee() {
    if(this.nombre == "" || this.apellido == "" || this.username=="" || this.pass=="" || this.telefono=="" || this.codpersonal==""){
      this.alertaCampos();
    }else{
      let newEmpleado = {
        nombre:this.nombre,
        apellido:this.apellido,
        nombreUsuario:this.username,
        pass:this.pass,
        telefono:this.telefono,
        codPersonal:this.codpersonal,
        rol:"employee"
  
      }
  
      
  
      this.http.post('http://localhost:3000/api/auth/signup', newEmpleado).subscribe(
        (res: any) => {
          console.log(res)
          console.log("User Register success!")
          this.getEmployees();
          this.confirmacion();
        },
        err => {
          console.log("User Register error: ")
          throw err
        }
      )
      
    }
    
  }
}
