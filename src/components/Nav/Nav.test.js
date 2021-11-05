import React from 'react';
import renderer from 'react-test-renderer';
import '../../setupTest';
import Nav from './Nav';

jest.mock('react-i18next', () => ({
   useTranslation: () => ({ t: key => key }),
}));

it('renders without crashing', () => {
   const tree = renderer.create(<Nav />);
   expect(tree).toMatchSnapshot();
});
