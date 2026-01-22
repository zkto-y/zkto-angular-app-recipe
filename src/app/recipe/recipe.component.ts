import { Component, OnInit } from '@angular/core';

import { Router, RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe',
  imports: [RouterModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})

export class RecipeComponent implements OnInit {
  recipe: any;

  constructor(private router: Router,
    private title: Title,
    private meta: Meta) { }

  ngOnInit(): void {
    this.recipe = history.state.data;

    this.title.setTitle(this.recipe ? this.recipe.title : 'Recipe');
    this.meta.updateTag({
      name: 'description',
      content: this.recipe ? this.recipe.cardText : 'Recipe details'
    });
  }
}
