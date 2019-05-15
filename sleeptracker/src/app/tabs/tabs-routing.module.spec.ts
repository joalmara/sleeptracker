import { TabsRoutingModule } from './tabs-routing.module';

describe('TabsRoutingModule', () => {
  let tabsRoutingModule: TabsRoutingModule;

  beforeEach(() => {
    tabsRoutingModule = new TabsRoutingModule();
  });

  it('should create an instance', () => {
    expect(tabsRoutingModule).toBeTruthy();
  });
});
