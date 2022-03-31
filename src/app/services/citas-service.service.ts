import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CitasServiceService {
  citas: any[]

  constructor(private http:HttpClient) {
    this.citas = []
    this.http.get('http://localhost:3000/api/citas/getCitas').subscribe(
      (res:any)=>{
        this.citas = res.citas
        console.log(res.citas)
      },
      err=>{
        this.citas = []
        console.log("Error en obtener citas: "+err)
      }
    )
  }
}
