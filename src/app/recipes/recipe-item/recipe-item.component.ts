import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit , OnDestroy {
  @Input() recipeItem: Recipe;
  constructor() { }

  ngOnInit() {}

  ionVeiwDidEnter() {
    console.log('DidEnter');
  }

  ionViewWillEnter() {
    console.log('WillEnter');
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
