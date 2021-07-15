class Cliente {
    constructor(obj) {
        obj = obj || {}
        this.idPedido = 0
        this.tokenAcesso = obj.Authorization;
        this.id = parseInt(obj.idCliente)
    }
}

export default Cliente;
