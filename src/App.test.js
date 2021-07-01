
import App from "./App";
import { render, screen, waitFor } from '@testing-library/react';
describe('App component', () => {
  test('it checks if App component loaded correctly', async () => {
    render(<App />);
    const appInfo = await waitFor(() => screen.getByTestId('appid'));
    expect(appInfo).toBeInTheDocument();
  });
});
