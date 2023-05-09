import { CommonResponse } from './../models/commonResponse.interface';
import { ProductsPayload } from './../models/productPayLoad.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Variable encargada de extraer la url del servicio base
  private baseUrl: string = environment.BASE_URL;

  keywordChanged = new Subject()

  constructor(private http: HttpClient) { }


  // Metodo encargado de traer los productos
  verProductos( payload: ProductsPayload ){
    const url = `${ this.baseUrl }/products/list`;
    let params = new HttpParams()
      .set('page', String(payload.page))
      .set('len', String(payload.len))

    if(!!payload.keyword){
      params = params.append('keyword', payload.keyword!);
    }

    return this.http.get<CommonResponse>(url,{params})
  }

}
