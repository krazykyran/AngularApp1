import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecipeModel } from './models';
import { MOCK_RECIPES } from './mock-recipes';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('My Recipe Box');
  protected readonly servings = signal(1);
  protected readonly recipe = signal<RecipeModel>(MOCK_RECIPES[0]);
  protected increaseServings(): void {
    this.servings.update(value => Math.min(value + 1, 10));
  }
  protected decreaseServings(): void {
    this.servings.update(value => Math.max(value - 1, 1));
  }
  protected selectSpaghettiCarbonara(): void {
    this.recipe.set(MOCK_RECIPES[0]);
  }
  protected selectCapreseSalad(): void {
    this.recipe.set(MOCK_RECIPES[1]);
  }
}
