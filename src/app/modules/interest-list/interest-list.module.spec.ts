import { InterestListModule } from './interest-list.module';

describe('InterestListModule', () => {
  let interestListModule: InterestListModule;

  beforeEach(() => {
    interestListModule = new InterestListModule();
  });

  it('should create an instance', () => {
    expect(interestListModule).toBeTruthy();
  });
});
