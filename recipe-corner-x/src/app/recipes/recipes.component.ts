import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Output('recipeSelectionEvent')
  recipeSelectionEvent: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelectingRecipe(recipe: Recipe) {
    console.debug(recipe);
    this.selectedRecipe = recipe;
    this.recipeSelectionEvent.emit(this.selectedRecipe);
  }

}
