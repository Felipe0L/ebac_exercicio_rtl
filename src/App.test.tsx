import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test do APP', () => {
    test('Se exibe a palavra Comentar', () => {
        render(<App />)
        expect(screen.getByText('Comentar')).toBeInTheDocument
    } )
    test('Se exite o botao de comentario', () => {
        render(<App />)
        expect(screen.getByTestId('sub')).toBeInTheDocument
    })
})