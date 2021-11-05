import { shallow } from 'enzyme';
import React from 'react';
import App from './App';
import './setupTest';

jest.mock('react-i18next', () => ({
   useTranslation: () => ({ t: key => key }),
   withTranslation: Component => {
      // eslint-disable-next-line no-param-reassign
      Component.defaultProps = { ...Component.defaultProps, t: () => '' };
      return Component;
   },
}));

it('renders without crashing', () => {
   shallow(<App />);
});
