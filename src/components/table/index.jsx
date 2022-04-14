import * as Styled from './styles';
import * as P from 'prop-types';

import { Container } from '../container/index';

export const Table = ({ dados, children, carregando = false }) => {
    return (
        <Container>
            {carregando
                ?
                <Styled.Carregando />
                :
                <Styled.Table>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Celular</th>
                            <th>Cidade</th>
                            <th>Sexo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dados.map((elemento, index) => (
                            <tr key={index}>
                                <td>{elemento.email}</td>
                                <td>{elemento.celular}</td>
                                <td>{elemento.cidade}</td>
                                <td>{elemento.sexo}</td>
                            </tr>
                        ))}
                    </tbody>
                </Styled.Table>
            }
            {children}
        </Container>

    );
}

Table.propTypes = {
    dados: P.arrayOf(P.shape({
        email: P.string.isRequired,
        celular: P.string.isRequired,
        cidade: P.string.isRequired,
        sexo: P.string.isRequired
    })).isRequired,
    children: P.node.isRequired,
    carregando: P.bool
}