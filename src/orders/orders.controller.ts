import { Controller, Get, Post, Body, Param, Inject, Patch } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ORDER_SERVICE } from 'src/config';
import { ClientProxy } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  constructor(

    @Inject(ORDER_SERVICE)
    private readonly ordersClient: ClientProxy,

  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    console.log('pas por aquí')
    return this.ordersClient.send( 'createOrder', createOrderDto );
  }

  @Get()
  findAll() {
    return this.ordersClient.send( 'findAllOrders', {} );
  }

  @Get(':id')
  findOne( @Param('id') id: string ) {
    return this.ordersClient.send( 'findOneOrder', id );
  }

  @Patch(':id')
  changeOrderStatus( @Param('id') id: string ) {
    return this.ordersClient.send( 'changeOrderStatus', { id } )

  }

}
