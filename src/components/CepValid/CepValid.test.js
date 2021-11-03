import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CepValid from './CepValid';

describe('Form', () => {
    test('Render Form e Validar CEP', () => {
        const validCep = render(
            <>
                <CepValid />
            </>
        );
        expect(validCep.baseElement).toBeInTheDocument();

        // Check o input do cep
        const input = screen.getByTestId('testInputCep');
        fireEvent.change(input, {target: {value: 88064000}})

        // Depois que o input foi verificado e inserido um valor valido, é feito o click do botão "Validar CEP"
        const button = screen.getByRole('button', { name: /Validar CEP/i });
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
    });
});