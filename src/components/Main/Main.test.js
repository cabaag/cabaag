import React from 'react';
import renderer from 'react-test-renderer';
import Main from './Main';

test('Renders the component', () => {
   const component = renderer.create(<Main />);
   const tree = component.toJSON();
   expect(tree).toMatchSnapshot();
});
