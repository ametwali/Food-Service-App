import { Injectable } from '@angular/core';
import { sample_foods, sample_tags } from 'src/data';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  //get all the food from the data.ts, in the future this should be connected to the backend
  //Step 5
  getAll(): Food[]{
    return sample_foods;                      //From "sample_foods" in "data.ts"
  }                                           //returns a Food array

  //Step 6
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  //Step 7
  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodsByTag(tag:string):Food[]{ //Define all the foods that has that specific tags, returns a food array "Food[]" as a result
    return tag =="All"? //Does the tag match "All"? If so, do this.getAll(), else, do the bottom one
    this.getAll():
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  //Step 8
  getFoodbyId(foodId:string):Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food(); //if the left hand side of ?? is undefined, do the right
  }
}
