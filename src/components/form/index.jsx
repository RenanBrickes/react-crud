import * as Styled from './styles';
import * as P from 'prop-types';
import { Container } from '../container/index';
import { useState } from 'react';
import { Button } from '../button/index';
import Swal from 'sweetalert2';
export const Form = ({ }) => {
    const [dados, setDados] = useState({
        nome: "",
        email: "",
        telefone: "",
        cidade: 0,
        sexo: ""
    });

    const handleValidate = (event) => {
        event.preventDefault();
        if (dados.nome == "" || dados.email == "" || dados.telefone == "" || dados.cidade == "" || dados.sexo == "")
            Swal.fire({
                title: 'Erro!',
                text: 'A dados invalidos, por favor, vefique!',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
    }

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setDados(state => ({ ...state, [inputName]: inputValue }));
    };

    return (
        <Container>
            <Styled.Form onSubmit={handleValidate} valido={valido} >
                <input type='text'
                    name='nome'
                    onChange={(event) => handleChange(event)}
                    placeholder='Felipe Barbosa'
                    required
                />
                <input name='email'
                    type='email'
                    onChange={(event) => handleChange(event)}
                    placeholder='felipebarbosa@gmail.com'
                    required />
                <input type='number'
                    name='telefone'
                    placeholder='19 9 9650-3040'
                    required />
                <select name='cidade'
                    required
                    onChange={(event) => handleChange(event)}
                >
                    <option value={1} >Piracicaba</option>
                    <option value={2} >Americana</option>
                    <option value={3} >Santa Barbara</option>
                </select>
                <input type='text'
                    required
                    name='sexo'
                    onChange={(event) => handleChange(event)}
                    placeholder='Masculino' />
                <Button text='Adicionar' type='submit' />
            </Styled.Form>
        </Container>
    );
}

Form.propTypes = {

}