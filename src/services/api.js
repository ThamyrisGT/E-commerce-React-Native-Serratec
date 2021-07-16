import axios from 'axios';
import { findCliente } from './realm';

const api = axios.create({
    baseURL: 'https://serratec-ecomerce.herokuapp.com/'
});

const findClienteStorage = async () => {
    const realm = await findCliente();
    const realmCliente = realm.objects('Cliente');
    let clienteAtual = {};
    realmCliente.forEach(item => clienteAtual = item);
    const token = clienteAtual.tokenAcesso;
    if (token != "") {
        api.interceptors.request.use((config) => {

<<<<<<< HEAD
    let token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0ZSIsImV4cCI6MTYyNjQ5NjI0MX0.m0vqGueZToKTesXM4W_oMBGKq0DpPpeMAzLLX-nWjY084BroxRGGzf3Emyt5eNM_xFCCKy-WXJnvPAIKKvk6Kg"

=======
            if (token) {
                config.headers.Authorization = token;
            }
>>>>>>> alec

            return config;

        }, (error) => {
            try {
                realm.write(() => {
                    realm.create('Cliente', {
                        idLocal: 1,
                        id: clienteAtual.id,
                        idPedido: clienteAtual.idPedido,
                        tokenAcesso: ""
                    }
                        , 'modified')
                })

            } catch (error) {
                console.log(error)
            }
        }

        );
    }
}

findClienteStorage();


export default api;
