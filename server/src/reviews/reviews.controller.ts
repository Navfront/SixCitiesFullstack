import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  async create(@Body() createReviewDto: CreateReviewDto) {
    return await this.reviewsService.create(createReviewDto);
  }

  @Get(':id')
  async GetByUserId(@Param('id') id: string) {
    return await this.reviewsService.GetByUserId(id);
  }
}
