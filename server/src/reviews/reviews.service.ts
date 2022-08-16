import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review, ReviewDocument } from './schemas/review.schema';
import { ReqUser } from 'src/auth/jwt-auth.guard';
import { Hotel, HotelDocument } from 'src/hotels/schemas/hotel.schema';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>,
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
  ) {}

  async create(createReviewDto: CreateReviewDto, req: ReqUser) {
    const hotel = await this.hotelModel.findById(createReviewDto.hotelId);
    if (!hotel) {
      throw new HttpException(
        `Такого Hotel нет! ${createReviewDto.hotelId}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const review = await this.reviewModel.create({
      ...createReviewDto,
      hotelId: hotel._id,
      userId: new Types.ObjectId(req.user.userId),
    });
    return review;
  }

  async GetByUserId(id: string) {
    return await this.reviewModel.find({ userId: id });
  }
}
