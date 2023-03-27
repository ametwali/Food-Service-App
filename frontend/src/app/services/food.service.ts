import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_foods, sample_tags } from 'src/data';
import { FOODS_BY_ID_URL, FOODS_BY_SEARCH_URL, FOODS_BY_TAG_URL, FOODS_TAGS_URL, FOODS_URL } from '../shared/constants/urls';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  //get all the food from the data.ts, in the future this should be connected to the backend
  //Step 5
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);                      //From "sample_foods" in "data.ts"
  }                                           //returns a Food array

  //Step 6
  getAllFoodsBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm)
  }

  //Step 7
  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag:string): Observable<Food[]> { //Define all the foods that has that specific tags, returns a food array "Food[]" as a result
    return tag =="All"? //Does the tag match "All"? If so, do this.getAll(), else, do the bottom one
    this.getAll():
    this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }

  //Step 8
  getFoodbyId(foodId:string): Observable<Food>{
    return this.http.get<Food>(FOODS_BY_ID_URL + foodId) //if the left hand side of ?? is undefined, do the right
  }
}
