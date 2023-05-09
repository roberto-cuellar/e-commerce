import { Product } from './../../../models/product.interface';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { ProductsPayload } from 'src/app/models/productPayLoad.interface';
import { ProductsService } from 'src/app/services/products.service';
import { map, Subscription } from 'rxjs';

@Component({
  selector: 'app-products-results',
  templateUrl: './products-results.component.html',
  styleUrls: ['./products-results.component.scss']
})
export class ProductsResultsComponent implements AfterViewInit, OnDestroy{

  products: Product[] = [];
  cantidadPost : number = 0;
  elementosPorPagina : number = 21 ;

  subscriptions = {
    keywordChanged: new Subscription()
  }

  // Objeto que posee la info para la peticion por defecto, page, len, usuario
  private defaultPostPayload: {page:number; len:number; keyword?: string} =  {page: 1, len: this.elementosPorPagina};
  private defaultPostPayloadCopy =  {...this.defaultPostPayload};

  constructor(private productsService:ProductsService){}

  ngAfterViewInit(): void {
    this.cargarData(this.defaultPostPayload);
    this.subscriptions.keywordChanged = this.productsService.keywordChanged.subscribe((res:any)=>{
      this.defaultPostPayload = {...this.defaultPostPayloadCopy}
      this.defaultPostPayload.keyword = res;
      this.cargarData(this.defaultPostPayload);
    })
  }

  pageChanged(paginaActual:any){
    this.defaultPostPayload.page = paginaActual;
    this.cargarData(this.defaultPostPayload);
  }


  cargarData(payload: ProductsPayload){
    this.productsService.verProductos(payload).pipe(
      map(
        data => {
          return data.body
        }
      )
    ).subscribe(
      response => {
        const products: Array<any> = response.products;
        this.cantidadPost = response.productTotalCount;
        this.products = []
        products.forEach(product => {
          this.products.push({
            id: product._id,
            name: product.name,
            price: product.price,
            brand: product.brand,
            keyword: product.keyword,
            img: product.img
          })
        })
      }
    )
  }

  ngOnDestroy(): void {

  }

}

