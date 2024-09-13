import { Controller, Get, Post, Body, Param, Inject, Patch, ParseUUIDPipe } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { ORDER_SERVICE } from 'src/config';
import { ClientProxy, RpcException } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Controller('orders')
export class OrdersController {
  constructor(

    @Inject(ORDER_SERVICE)
    private readonly ordersClient: ClientProxy,

  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send( 'createOrder', createOrderDto );
  }

  @Get()
  findAll() {
    return this.ordersClient.send( 'findAllOrders', {} );
  }

  @Get(':id')
  async findOne( @Param('id', ParseUUIDPipe ) id: string ) {
    try {

      const order = await firstValueFrom( this.ordersClient.send( 'findOneOrder', { id} ))

      return order;

    } catch (error) {
      throw new RpcException(error);
    }
  }

  @Patch(':id')
  changeOrderStatus( @Param('id') id: string ) {
    return this.ordersClient.send( 'changeOrderStatus', { id } )
  }

}
