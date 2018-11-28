import {Body, Controller, Post} from '@nestjs/common';

@Controller()
export class CommonController {
  constructor() {
  }

  @Post('/language')
  async language(@Body('name') name: string) {
  }
}
