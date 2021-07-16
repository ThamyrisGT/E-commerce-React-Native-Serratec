class Cliente {
    constructor(obj) {
        obj = obj || {}
        this.idLocal = 1;
        this.idPedido = 0
        this.tokenAcesso = obj.Authorization;
        this.id = parseInt(obj.idCliente) || obj.idCliente
    }
}

export default Cliente;
