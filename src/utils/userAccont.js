import { findCliente } from '../../services/realm';

const logar = async () => {
    const resposta = await getCliente(username, senha);
    const tokenId = resposta.data;
    console.log(tokenId);
    if (tokenId) {
        const realm = await findCliente();
        try {
            realm.write(() => {
                realm.create('Cliente',
                    new Cliente(tokenId)
                    , 'modified')
            })
            console.log('deu bom')
        } catch (error) {
            console.log('deu ruim')
            console.log(error)
        }
        finally {
            realm.close();
        }
    }
}

const cadastrar = async () => {
    const resposta = await register(usuario);
    const cliente = resposta.data;
    console.log(cliente);
};