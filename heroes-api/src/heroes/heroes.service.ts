import { Injectable } from '@nestjs/common';
import { Hero } from './interfaces/hero.interface';

@Injectable()
export class HeroesService {
  private readonly heroes: Hero[] = [
    {
      name: 'Izuku Midoriya',
      alias: 'Deku',
      age: 16,
      power: 'One for all',
    },
    {
      name: 'Katsuki Bakugo',
      alias: 'Bakugo',
      age: 16,
      power: 'Explosion',
    },
    {
      name: 'Yagi Toshinori',
      alias: 'All Might',
      age: 35,
      power: 'One For All',
    },
  ];

  create(hero: Hero) {
    this.heroes.push(hero);
  }

  findAll(): Hero[] {
    return this.heroes;
  }

  findOne(id: number): Hero {
    return this.heroes.find((hero, pos) => pos === id);
  }

  update(id: number, hero: Hero) {
    const foundIndex = this.heroes.findIndex((value, pos) => pos === id);
    this.heroes[foundIndex] = hero;
  }

  remove(id: number) {
    this.heroes.splice(id, 1);
  }
}