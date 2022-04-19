import * as Styled from './styles';
import * as P from 'prop-types';

export const Button = ({ text, type = 'button', eventClick = null }) => {
    return (
        eventClick != null ?
            <Styled.Button text={text.toLowerCase()} type={type} onClick={eventClick} >
                {text}
            </Styled.Button>
            :
            <Styled.Button text={text.toLowerCase()} type={type}>
                {text}
            </Styled.Button>
    );
}

Button.propTypes = {
    text: P.string.isRequired,
    type: P.string,
    eventClick: P.func
}