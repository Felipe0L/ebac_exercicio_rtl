import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Inserção de dois comentários', () => {
        render(<PostComment />)
        fireEvent.change(screen.getByTestId('comment'), {
            target: {
                value: 'Que carrinho bonito'
            }
        })
        fireEvent.click(screen.getByTestId('sub'))
        fireEvent.change(screen.getByTestId('comment'), {
            target: {
                value: 'Quanto custa?'
            }
        })
        fireEvent.click(screen.getByTestId('sub'))
        
        expect(screen.getAllByTestId('item')).toHaveLength(2)
    })
});