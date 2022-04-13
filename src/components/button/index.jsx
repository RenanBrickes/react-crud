import * as Styled from './styles';
import * as P from 'prop-types';

export const Button = ({text}) => {
    return (
        <Styled.Button text={text.toLowerCase()} >
            {text}
        </Styled.Button>
    );
}

Button.propTypes = {
    text : P.string.isRequired
}