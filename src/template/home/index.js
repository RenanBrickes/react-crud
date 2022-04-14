import { Table } from '../../components/table/index';
import { GridButton } from '../../components/gridbutton/index';
import { useEffect, useState } from 'react';
import { Read } from '../../api/api';

function App() {
    const [dados, setDados] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const getUsers = async () => {
        await Read()
            .then((valor) => {
                if (valor.resultado) {
                    setDados([...valor.modelo]);
                    setCarregando(false);
                }
                else {

                }
            })
            .catch((err) => {

            });
    }

    useEffect(() => {
        setTimeout(() => {
            getUsers();
            
        },2000);
    }, []);


    return (

        <Table dados={dados} carregando={carregando}>
            <GridButton />
        </Table>
    );
}

export default App;

