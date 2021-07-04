import Login from "./Login";
import { render, screen, waitFor } from '@testing-library/react';
import { UserContext } from '../../UserContext';
describe('Login component', () => {
  test('it checks if login component loaded correctly', async () => {
      let user=false;
    render(<UserContext.Provider value={"providerValue"}>
           <Login />
        </UserContext.Provider>);
    const loginInfo = await waitFor(() => screen.getByTestId('loginContainerTestId'));
    expect(loginInfo).toBeInTheDocument();
  });
});