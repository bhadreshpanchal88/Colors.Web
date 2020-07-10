import { Component ,OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rowData:any;
  constructor(private http:HttpClient){

  }
  ngOnInit(){
    this.rowData = this.http.get("https://localhost:44390/api/colors");
  }
  cellStyling(params: any) {
    return { 'background-color': params.value, 'color': 'transparent' };
  }
  title = 'Grid';
  columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Category', field: 'category', sortable: true, filter: true },
    { headerName: 'Type', field: 'type', sortable: true, filter: true },
    { headerName: 'Hex Code', field: 'code.hex' },
    { headerName: 'Color', field: 'code.hex', cellStyle: this.cellStyling }
  ];
  
}
