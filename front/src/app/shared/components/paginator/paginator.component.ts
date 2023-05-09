import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges{
  @Input('totalElements') totalElements!:number;
  @Input('elementsPage') elementsPage!:number;
  @Output() pageChange = new EventEmitter<number>();
  arrayPages: number[] = [];
  pages!: number;
  selectedPage = 0;
  firstItemIndex!:number;
  lastItemIndex!:number;

  /**
   *
   * @param changes Simple changes in the input of the component
   */
  ngOnChanges(changes: SimpleChanges){
    if(changes['totalElements']){
      this.pages = Math.ceil(this.totalElements/this.elementsPage)
      // This have to be define
      if(this.pages>10){
        this.pages = 10;
      }
      this.arrayPages = new Array(this.pages)
      this.firstItemIndex = 0;
      this.lastItemIndex = this.elementsPage-1;
    }
  }

  /**
   *
   * @param selectedPage Actual selected page
   */
  elementsIndex(selectedPage:number){
    this.firstItemIndex = (this.selectedPage)*this.elementsPage;
    this.lastItemIndex = (this.selectedPage+1)*this.elementsPage;
    this.pageChange.emit(this.selectedPage+1)
  }


  /**
   *
   * @param index The index that is coming from the buttons
   */
  changePage(index:number){
    this.selectedPage = index;
    this.elementsIndex(this.selectedPage);
  }

  /**
   * Method to change to the next page of the actual page
   */
  nextPage(){
    if(this.selectedPage-1 <this.pages){
      this.selectedPage++;
      this.elementsIndex(this.selectedPage);
    }
  }

  /**
   * Method to return about the actual page
   */
  prevPage(){
    if(this.selectedPage > 0){
      this.selectedPage--;
      this.elementsIndex(this.selectedPage);
    }
  }




}
