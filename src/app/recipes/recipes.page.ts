import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipesService  } from './recipes.service';
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit , OnDestroy {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionVeiwDidEnter() {
    console.log('DidEnter');
  }

  ionViewWillEnter() {
    console.log('WillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidLeave() {
    console.log('DidEnter');
  }

  ionViewWillLeave() {
    console.log('WillLeave');
  }

  ngOnDestroy(): void {
    console.log('OnDestroyed');
  }

}
