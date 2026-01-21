import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';    
import { RecipeComponent } from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'recipe/:id', component: RecipeComponent },
    { path: 'home', component: HomeComponent }
];
