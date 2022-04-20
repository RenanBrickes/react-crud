import * as Styled from './styles';
import * as P from 'prop-types';
import Swal from 'sweetalert2';

import { Container } from '../container/index';
import { Button } from '../button/index';
import { FormUpdate } from '../formUpdate/index';
import { Details } from '../../api/api';
import { useState } from 'react';

export const Table = ({ dados, children, carregando = false }) => {

    const [showDetails, setShowDetails] = useState(false);
    const [dadosDetails, setDadosDetails] = useState({})

    const handleDetalhe = async (event, id) => {
        if (showDetails) {
            event.target.innerHTML = "Detalhe";
            setShowDetails(false);
        }
        else {
            event.target.innerHTML = "Cancelar";
            let respose = await Details(id);
            if (!respose.resultado)
                return Swal.fire({
                    title: "Erro !",
                    text: respose.mensagem,
                    icon: 'error'
                });
            else {
                setShowDetails(!showDetails);
                setDadosDetails({ ...respose.modelo, cidade: respose.modelo.cidade.id });
            }
        }
    }

    return (
        <Container>
            {carregando
                ?
                <Styled.Carregando />
                :
                <Styled.Table>
                    <thead>
                        <tr>
                            <th>Ações</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Celular</th>
                            <th>Cidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((elemento, index) => (
                            <tr key={index}>
                                <td>
                                    <Button text='Detalhe' eventClick={async (event) => await handleDetalhe(event, elemento.id)} />
                                </td>
                                <td>{elemento.nome}</td>
                                <td>{elemento.email}</td>
                                <td>{elemento.celular}</td>
                                <td>{elemento.cidade.nome}</td>
                            </tr>
                        ))}
                    </tbody>
                </Styled.Table>
            }
            {children}
            {(showDetails && (
                <div>
                    <FormUpdate usuario={dadosDetails} />
                </div>
            ))
            }
        </Container >

    );
}

Table.propTypes = {
    dados: P.arrayOf(P.shape({
        nome: P.string.isRequired,
        id: P.string.isRequired,
        email: P.string.isRequired,
        celular: P.string.isRequired,
        cidade: P.object.isRequired
    })).isRequired,
    children: P.node,
    carregando: P.bool
}