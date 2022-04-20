import { Table } from '../../components/table/index';
import { GridButton } from '../../components/gridbutton/index';
import { useEffect, useState } from 'react';
import { Read } from '../../api/api';
import Swal from 'sweetalert2';


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
                    Swal.fire({
                        title: "Ops !",
                        text: valor.mensagem,
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    })
                }
            })
            .catch((err) => {
                Swal.fire({
                    title: "Ops !",
                    text: "Não foi possivél carregar os dados, tente novamente ou mais!",
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
                    .then(() => window.location.reload());
            });
    }

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <>
            <Table dados={dados} carregando={carregando} />
            <GridButton />
        </>
    );
}

export default App;

