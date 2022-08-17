import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Hotel, HotelDocument } from 'src/hotels/schemas/hotel.schema';
import { ReqUser } from 'src/auth/jwt-auth.guard';
import { User, UserDocument } from 'src/users/schemas/user.schema';

@Injectable()
export class FavoritesService {
  constructor(
    @InjectModel(Hotel.name) private hotelModel: Model<HotelDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async findAll(req: ReqUser) {
    const user = await this.userModel.findById(req.user.userId);
    return user?.favorites;
  }

  async update(hotelId: string, status: string, req: ReqUser) {
    const hotel = await this.hotelModel.findById(hotelId);
    if (!hotel) {
      throw new HttpException('Такого отеля нет!', HttpStatus.BAD_REQUEST);
    }
    const user = await this.userModel.findById(req.user.userId);
    if (!user) {
      throw new HttpException('Такого юзера нет!', HttpStatus.BAD_REQUEST);
    }
    if (status === '1') {
      const cond = user.favorites.find(
        (h) => String(h._id) === String(hotel._id),
      );
      if (!cond) user.favorites.push(hotel._id);
      await user.save();
    } else if (status === '0') {
      user.favorites = user.favorites.filter(
        (hotelId) => hotelId === hotel._id,
      );
      await user.save();
    }
    console.log(user.favorites);

    return user?.favorites;
  }
}
