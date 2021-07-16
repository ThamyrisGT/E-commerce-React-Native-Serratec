import { findCliente } from '../services/realm';
import { register, getCliente } from '../services/apiCliente';
import Cliente from '../model/Cliente';



const logar = async (username, senha) => {

    const resposta = await getCliente(username, senha).catch(
        error => {
            console.log(error);
            return false;
        }
    );
    const tokenId = resposta.data;

    if (tokenId) {
        const realm = await findCliente();
        try {
            realm.write(() => {
                realm.create('Cliente',
                    new Cliente(tokenId)
                    , 'modified')
            })
            console.log('deu bom')
            return true;
        } catch (error) {
            console.log('deu ruim')
            console.log(error)
        }
    }
}

const cadastrar = async (usuario) => {
    const resposta = await register(usuario);
    console.log(usuario)
    if (resposta.status == 201) {
        logar(usuario.username, usuario.senha)
        console.log("deu bom")
    } else {
        throw new Error("deu ruim")
    }
};

export {
    cadastrar,
    logar
}
