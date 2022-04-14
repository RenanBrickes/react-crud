import { Table } from '../../components/table/index';
import { GridButton } from '../../components/gridbutton/index';
import { mockDados } from '../../components/table/mock';
import { useEffect, useState } from 'react';

function App() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        setDados(mockDados);
    },[]);

    return (
        <Table dados={dados}>
            <GridButton />
        </Table>
    );
}

export default App; 