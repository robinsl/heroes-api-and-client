import { Hero } from '../interfaces/hero.interface';
import { IsInt, IsString } from 'class-validator';

export class HeroDto implements Hero {
  @IsString()
  readonly name: string;

  @IsString()
  readonly alias: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly power: string;
}