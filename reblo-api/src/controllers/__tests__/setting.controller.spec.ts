import {Test, TestingModule} from '@nestjs/testing';
import {ApiModule} from '../../api.module';

describe('AdminController', () => {

  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [ApiModule],
    }).compile();

  });

  afterAll(async () => {
    await module.close();
  });
});
