import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import Filter from "./Filter";
describe('Filter component', () => {
    test('it checks if filter loaded correctly', async () => {
        render(<Filter />);
        const filterInfo = await waitFor(() => screen.getByTestId('filters'));
        expect(filterInfo).toBeInTheDocument();
        const btnSearch=await waitFor(()=>screen.getByTestId('btnSearch'))
        expect(btnSearch).toBeInTheDocument()
    });
});