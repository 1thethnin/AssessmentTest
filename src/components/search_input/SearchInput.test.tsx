import {render} from '@testing-library/react-native'
import SearchInput from './SearchInput';


test('renders correctly', () => {
    jest.mock('react-redux', () => 'Provider');
    //  const {getByPlaceholderText} = render(<SearchInput />);
    //  const input = getByPlaceholderText('Enter your name');
    //  expect(input).toBeTruthy();
   });
   