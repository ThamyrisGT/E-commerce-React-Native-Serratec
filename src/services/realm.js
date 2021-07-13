import Realm from 'realm';
import Cliente from '../schemas/Cliente';

export default function getCliente1() {
    return Realm.open({ schema: [Cliente] })
}