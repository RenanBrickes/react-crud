import * as Styled from './styles';
import * as P from 'prop-types';
import { Button } from '../button/index';
import { Container } from '../container/index';

export const GridButton = () => {
    return (
        <Container>
            <Styled.Container >
                <Button text='Adicionar'/>
                <Button text='Atualizar'/>
                <Button text='Excluir'/>
                <Button text='Cancelar'/>
            </Styled.Container>
        </Container>
    );
}

GridButton.propTypes = {
}