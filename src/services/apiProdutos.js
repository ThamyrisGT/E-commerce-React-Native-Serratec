import api from '../services/api'

const getProducts = async () => {
    try {
        const productslist = await api.get('produto', { responseType: 'text' })
        if (productslist.status !== 200) throw new Error("Ocorreu uma falha")
        return productslist.data
    } catch (error) {
        console.log(error)
        console.log("Deu erro na requisição")
    }
};


export default getProducts;