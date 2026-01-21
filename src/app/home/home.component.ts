import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private router: Router) {}

  recipeList: any[] = [
    {
      id: 1,
      url: 'assets/images/Banitsa.png',
      title: 'Banitsa',
      cardTitle: 'Banitsa',
      cardText: 'Traditional Bulgarian pastry made with phyllo dough and cheese.',
      route: '/recipe',
      ingredients: ['Phyllo dough', 'Feta cheese', 'Eggs', 'Yogurt', 'Butter'],
      instructions: '1. Preheat oven to 350°F (175°C). 2. In a bowl, mix crumbled feta cheese, beaten eggs, and yogurt. 3. Brush a baking dish with melted butter. 4. Layer phyllo sheets in the dish, brushing each sheet with butter. 5. Spread the cheese mixture over the phyllo layers. 6. Continue layering phyllo sheets and cheese mixture until all ingredients are used, finishing with a layer of phyllo. 7. Bake for 30-40 minutes until golden brown. 8. Let cool slightly before serving.'
    },
    {
      id: 2,
      url: 'assets/images/PotatoSalmonRoe.png',
      title: 'Crispy Potato and Caviar Bites',
      cardTitle: 'Crispy Potato and Caviar Bites',
      cardText: 'Toasted potato bites topped with salmon roe.',
      route: '/recipe',
      ingredients: ['Potatoes', 'Olive oil', 'Salt', 'Pepper', 'Salmon roe'],
      instructions: '1. Preheat oven to 400°F (200°C). 2. Wash and slice potatoes into thin rounds. 3. Toss potato slices with olive oil, salt, and pepper. 4. Arrange potato slices on a baking sheet in a single layer. 5. Bake for 20-25 minutes until crispy and golden brown. 6. Remove from oven and let cool slightly. 7. Top each potato bite with a small spoonful of salmon roe before serving.'
    },
  ];

  viewRecipe(item: any): void {
    this.router.navigate(['/recipe', item.id], {
      state: { data: item }
    });
  }
}
