import * as Styled from './styles';
import * as P from 'prop-types';

export const Button = ({ text, type = 'button' }) => {
    return (
        <Styled.Button text={text.toLowerCase()} type={type}>
            {text}
        </Styled.Button>
    );
}

Button.propTypes = {
    text: P.string.isRequired,
    text: P.string,

}