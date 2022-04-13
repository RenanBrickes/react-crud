import { Table } from './index';
import {  mockDados } from './mock';
export default {
    title: 'Tabela',
    component: Table,
    args : {
        dados : mockDados
    }
}

export const Tabela = (args) => <Table {...args} /> 