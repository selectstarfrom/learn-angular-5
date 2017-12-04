import { Recipe } from "./recipe-list/recipe.model";

export class RecipeService {

    recipes: Recipe[] = [
        new Recipe('R1', 'R1 is a test Recipe', 'http://images.media-allrecipes.com/userphotos/960x960/3758842.jpg'),
        new Recipe('R2', 'R2 is a test Recipe', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg'),
        new Recipe('R3', 'R2 is a test Recipe', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371603491866.jpeg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.getRecipes()[index];
    }
}