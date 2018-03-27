import {Component, OnInit, ViewChild} from '@angular/core';
import {CarService} from '../shared/car/car.service';
import {jqxTreeComponent} from '../../../jqwidgets-ts/angular_jqxtree';


@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})


export class CarListComponent implements OnInit {
  @ViewChild('treeReference') tree: jqxTreeComponent;
  records: Array<any>;
  //data: Array<any>
  source: any;;
 


  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carService.getAll().subscribe(data => {
      //this.data = data;

      // prepare the data
      this.source = {
        datatype: 'json',
        datafields: [
          {name: 'id'},
          {name: 'managerId'},
          {name: 'name'}
        ],
        id: 'id',
        localdata: data
      };


    });


      // create data adapter & perform Data Binding.
      const dataAdapter = new jqx.dataAdapter(this.source, {autoBind: true});



      // get the tree items. The first parameter is the item's id. The second parameter is the parent item's id. The 'items' parameter represents 
      // the sub items collection name. Each jqxTree item has a 'label' property, but in the JSON data, we have a 'name' field. The last parameter 
      // specifies the mapping between the 'name' and 'label' fields.  
      this.records = dataAdapter.getRecordsHierarchy('id', 'managerId', 'items', [{name: 'name', map: 'label'}]);



    //      this.tree.refresh();
  }
}
