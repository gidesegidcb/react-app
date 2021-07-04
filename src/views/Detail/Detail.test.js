import React from "react";
import { Router} from "react-router-dom";
import { render, screen, waitFor } from '@testing-library/react';
import Detail from "./Detail";
import { createMemoryHistory } from 'history'
describe('Details component', () => {
    test('it checks if Detail loaded correctly', async () => {
        const history = createMemoryHistory();
        history.location.state={
            data:"gide"
        }
        render(<Router history={history}>
                <Detail />
              </Router>);
        const detailsInfo = await waitFor(() => screen.getByTestId('detailid'));
        expect(detailsInfo).toBeInTheDocument();
        const btnSearch=await waitFor(()=>screen.getByTestId('back'))
        expect(btnSearch).toBeInTheDocument()
    });
});