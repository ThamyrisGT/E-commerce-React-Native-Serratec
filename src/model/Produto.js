class Produto {
    constructor(obj) {
        obj = obj || {}
        this.id = obj.id
        this.nome = obj.nome
        this.preco = obj.preco
        this.idCegoria = obj.idCategoria
        this.url = obj.url
    }
}

export default Produto
