// 使用 nest g controller cats 创建cats文件夹
import { Controller, Get,Post,HttpCode,Header } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  create(): string {
    return 'This action adds a new cat'
  }
  
  @Get()
  findAll():string {
    return 'This action returns all cats'
  }
}
