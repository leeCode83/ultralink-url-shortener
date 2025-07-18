import { Test, TestingModule } from '@nestjs/testing';
import { UrlManageController } from './url-manage.controller';

describe('UrlManageController', () => {
  let controller: UrlManageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UrlManageController],
    }).compile();

    controller = module.get<UrlManageController>(UrlManageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
