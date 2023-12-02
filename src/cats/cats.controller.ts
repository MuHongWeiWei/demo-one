import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatInterface } from './interfaces/cat.interface';
import { validate } from 'class-validator';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    await validate(createCatDto);
    this.catService.create(createCatDto);
  }
  @Get()
  async findAll(): Promise<CatInterface[]> {
    return this.catService.findAll();
  }
}
