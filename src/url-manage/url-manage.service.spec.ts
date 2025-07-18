import { Test, TestingModule } from '@nestjs/testing';
import { UrlManageService } from './url-manage.service';

describe('UrlManageService', () => {
  let service: UrlManageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlManageService],
    }).compile();

    service = module.get<UrlManageService>(UrlManageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
