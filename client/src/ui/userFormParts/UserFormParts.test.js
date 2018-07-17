import React from 'react';
import { shallow } from 'enzyme';

import {
  StyledForm,
  Label,
  StyledField,
  Wrapper,
  FormActions,
  Submit,
  Cancel,
  SubmitError
} from './UserFormParts';


test('Userform parts should match snapshots', () => {
  expect(shallow(<StyledForm />)).toMatchSnapshot();
  expect(shallow(<Label />)).toMatchSnapshot();
  expect(shallow(<StyledField />)).toMatchSnapshot();
  expect(shallow(<Wrapper />)).toMatchSnapshot();
  expect(shallow(<FormActions />)).toMatchSnapshot();
  expect(shallow(<Submit />)).toMatchSnapshot();
  expect(shallow(<Cancel />)).toMatchSnapshot();
  expect(shallow(<SubmitError />)).toMatchSnapshot();
});

