import {Test, TestingModule} from '@nestjs/testing';
import {ApiModule} from '../../api.module';
import {AdminService} from '../../services/admin.service';
import {AdminController} from '../admin.controller';

describe('AdminController', () => {

  let adminServ: AdminService;
  let adminCtrl: AdminController;
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [ApiModule],
    }).compile();

    adminServ = module.get<AdminService>(AdminService);
    adminCtrl = module.get<AdminController>(AdminController);
  });

  afterAll(async () => {
    await module.close();
  });

  test('AdminController.test', async () => {
    const target = 'hello world';
    const result = await adminCtrl.test();
    console.log(result);
    expect(result).toBe(target);
  });

  test('AdminController.createAdmin', async () => {
    const target = 'hello world';
    const result = await adminCtrl.createAdmin();
    console.log(result);
    expect(result).toBe(result);
  });
});
