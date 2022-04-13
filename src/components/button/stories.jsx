import { Button } from './index';

export default {
    title: 'Botões',
    component: Button,
    args: {
        text: "Adicionar"
    }

}

export const Adicionar = (args) => <Button {...args} /> 
export const Atualizar = (args) => <Button {...args} />
export const Excluir = (args) => <Button {...args} />
export const Cancelar = (args) => <Button {...args} />

Atualizar.args = {
    text : "Atualizar"
}

Excluir.args = {
    text : "Excluir"
}

Cancelar.args = {
    text : "Cancelar"
}