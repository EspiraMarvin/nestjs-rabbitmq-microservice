import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersRepository: OrdersRepository) {}
  getHello(): string {
    return 'Hello Marvin3!';
  }

  async createOrder(request: CreateOrderDto) {
    return this.ordersRepository.create(request);
  }

  async getOrders() {
    return this.ordersRepository.find({});
  }
}
