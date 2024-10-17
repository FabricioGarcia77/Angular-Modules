import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get HeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(name: string):void {
      this.name = 'Spiderman';
  }

  changeAge(age: number):void {
      this.age = 23;
  }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}

