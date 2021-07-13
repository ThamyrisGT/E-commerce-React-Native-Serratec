import Realm from 'realm';
import Cliente from '../schemas/Cliente';

export default function getCliente() {
    return Realm.open({ schema: [Cliente] })
}