import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("Tandoori","Chicken Toodori","https://www.simplyrecipes.com/wp-content/uploads/2010/06/tandoori-chicken-vertical-a-1600.jpg"),
    new Recipe("Tandoori","Chicken Toodori","https://www.simplyrecipes.com/wp-content/uploads/2010/06/tandoori-chicken-vertical-a-1600.jpg")
  ];
  name:string="ABHIYAN";
  
  constructor() { }

  ngOnInit() {
  }

}
