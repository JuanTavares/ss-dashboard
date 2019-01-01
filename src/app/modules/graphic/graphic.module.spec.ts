import { GraphicModule } from './graphic.module';

describe('GraphicModule', () => {
  let graphicModule: GraphicModule;

  beforeEach(() => {
    graphicModule = new GraphicModule();
  });

  it('should create an instance', () => {
    expect(graphicModule).toBeTruthy();
  });
});
