import { ContentEditModule } from './content-edit.module';

describe('ContentEditModule', () => {
  let contentEditModule: ContentEditModule;

  beforeEach(() => {
    contentEditModule = new ContentEditModule();
  });

  it('should create an instance', () => {
    expect(contentEditModule).toBeTruthy();
  });
});
