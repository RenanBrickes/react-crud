import * as Styled from './styles';
import * as P from 'prop-types';

export const Container = ({children}) => {
    return (
        <Styled.Container>
            {children}
        </Styled.Container>
    );
}

Container.propTypes = {
    children : P.node.isRequired
}