import MyAuth from "./MyAuth";
import { render, screen, waitFor } from '@testing-library/react';
import { UserContext } from '../../UserContext';
describe('Login component', () => {
  test('it checks if login component loaded correctly', async () => {
      let user=false;
    render(<UserContext.Provider value={"providerValue"}>
           <MyAuth />
        </UserContext.Provider>);
    const loginInfo = await waitFor(() => screen.getByTestId('authDiv'));
    expect(loginInfo).toBeInTheDocument();
  });
});