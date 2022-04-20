import * as Styled from './styles';
import { Container } from '../container/index';
import { useState } from 'react';
import { Button } from '../button/index';
import Swal from 'sweetalert2';
import { Delete, Update } from '../../api/api';
export const FormUpdate = ({ usuario }) => {

    const [dados, setDados] = useState({ ...usuario });

    const handleValidate = async (event) => {
        event.preventDefault();
        if (dados.nome === "" || dados.email === "" || dados.telefone === "" || dados.cidade === "" || dados.sexo === "")
            Swal.fire({
                title: 'Erro!',
                text: 'A dados invalidos, por favor, vefique!',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        else {

            console.log(dados);
            const response = await Update(dados);
            if (!response.resultado)
                Swal.fire({
                    title: "Atenção !",
                    text: response.mensagem,
                    icon: 'info',
                    confirmButtonText: 'Ok'
                });
            else
                Swal.fire({
                    title: "Sucesso !",
                    text: response.mensagem,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                }).then(() => window.location.reload());
        }
    }

    const handleChange = (event) => {
        const inputName = event.target.name;
        const inputValue = event.target.value;
        setDados(state => ({ ...state, [inputName]: inputValue }));
    };

    const handleDelete = async (id) => {
        let resposta = await Delete(id);
        Swal.fire({
            title: !resposta.resposta ? "Sucesso" : 'Erro!',
            text: resposta.mensagem,
            icon: !resposta.resposta ? "success" : 'error',
            confirmButtonText: 'Ok'
        }).then(() => window.location.reload());
    }

    return (
        < Container >
            <Styled.Form onSubmit={handleValidate} >
                <input type='text'
                    name='nome'
                    value={dados.nome}
                    onChange={(event) => handleChange(event)}
                    placeholder='Felipe Barbosa'
                    required
                />
                <input name='email'
                    type='email'
                    value={dados.email}
                    onChange={(event) => handleChange(event)}
                    placeholder='felipebarbosa@gmail.com'
                    required />
                <input
                    type='number'
                    name='celular'
                    value={dados.celular}
                    placeholder='19 9 9650-3040'
                    onChange={(event) => handleChange(event)}
                    required />
                <select name='cidade'
                    required
                    value={dados.cidade.id}
                    onChange={(event) => handleChange(event)}
                >
                    <option value={1} >Piracicaba</option>
                    <option value={2} >Americana</option>
                    <option value={3} >Santa Barbara</option>
                </select>
                <input type='text'
                    required
                    name='sexo'
                    value={dados.sexo}
                    onChange={(event) => handleChange(event)}
                    placeholder='Masculino' />
                <Styled.Acoes>
                    <Button text='Atualizar' type='submit' />
                    <Button text='Excluir' eventClick={async (event) => await handleDelete(dados.id)} />
                </Styled.Acoes>
            </Styled.Form>
        </Container >
    );
}

FormUpdate.propTypes = {
}