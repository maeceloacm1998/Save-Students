/* eslint-disable import/no-extraneous-dependencies */
import {render} from '@testing-library/react-native';
import Icon from './icon';

describe('aa', () => {
  it('aaaaa', () => {
    render(
      <Icon type="Ionicons" name="ios-calendar-sharp" size={25} color="#000" />,
    );
  });
});
