import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{


  //"foods" field with a type of "Food" array
  //this will hold the data that we get from the food.service
  //first you need to INJECT food.service inside the HomeComponent --> food.service has @Injectable


  foods:Food[] = [];

  // Angular will look at the type that you used inside the constructor
  //and give the Parameter (foodService) a new instance of FoodService, and we don't have to intanstiate it
  // -> new instance: foodService = new FoodService()
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {        //"FoodService" came from food.service.ts
    activatedRoute.params.subscribe((params) =>{                                       //"ActivatedRoute" is for listening to the router-outlet
                                                                                       //listening to the route params. "subscribe" means anytime that the "params" change, call the function inside the "subscribe"
      if(params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm'])    //give me the search result based on the 'searchTerm'
      else if(params['tag'])
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      else
        this.foods = foodService.getAll();                                             // Getting all the foods from sample.foods in "data.ts" through "food.service.ts" method getAll()
      })


  }

  ngOnInit(){}

}
