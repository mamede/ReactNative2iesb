import {ItemProps} from '@shared/types/itemTypes';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      SignIn: undefined;
      SignUp: undefined;
      HomeTabs: undefined;
      Home: undefined;
      Shopping: undefined;
      Settings: undefined;
      Details: {item: ItemProps};
    }
  }
}
