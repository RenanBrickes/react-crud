import * as Styled from './styles';
import { Button } from '../button/index';
import { Container } from '../container/index';
import { useState } from 'react';
import { Form } from '../formAdd/index';
export const GridButton = () => {

    const [addVisible, setAddVisible] = useState(false);

    const setFormVisible = () => {
        setAddVisible(!addVisible);
    }

    return (
        <Container>
            <Styled.Container >
                <Button text='Adicionar' eventClick={setFormVisible} />
            </Styled.Container>
            {addVisible && (<Form />)}
        </Container>
    );
}

GridButton.propTypes = {
}