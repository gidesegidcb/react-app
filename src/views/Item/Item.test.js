import Item from "./Item";
import { render, screen, waitFor } from '@testing-library/react';
describe('Item component', () => {
  test('it checks if Item component loaded correctly', async () => {
    render(<Item />);
    const listInfo = await waitFor(() => screen.getByTestId('listContainer'));
    expect(listInfo).toBeInTheDocument();
  });
});