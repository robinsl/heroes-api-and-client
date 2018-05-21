import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { HeroDto } from './dto/create-hero.dto';
import { HeroesService } from './heroes.service';
import { Hero } from './interfaces/hero.interface';
import { UsePipes } from '@nestjs/common/utils/decorators/use-pipes.decorator';

@Controller('heroes')
export class HeroesController {
  constructor(
    private readonly heroesService: HeroesService,
  ) {
  }

  @Get()
  async findAll(): Promise<Hero[]> {
    return this.heroesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) id) {
    return this.heroesService.findOne(id);
  }

  @Post()
  async create(@Body() heroDto: HeroDto) {
    this.heroesService.create(heroDto);
  }

  @Put(':id')
  update(@Param('id', new ParseIntPipe()) id, @Body() heroDto: HeroDto) {
    this.heroesService.update(id, heroDto);
  }

  @Delete(':id')
  remove(@Param('id', new ParseIntPipe()) id) {
    this.heroesService.remove(id);
  }
}