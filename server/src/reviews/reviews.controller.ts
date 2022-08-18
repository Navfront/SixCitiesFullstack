import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Request,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @ApiOperation({ summary: 'Create review' })
  @UsePipes(ValidationPipe)
  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() createReviewDto: CreateReviewDto, @Request() req) {
    return await this.reviewsService.create(createReviewDto, req);
  }

  @ApiOperation({ summary: 'Get review by userId' })
  @Get(':id')
  async GetByUserId(@Param('id') id: string) {
    return await this.reviewsService.GetByUserId(id);
  }
}
