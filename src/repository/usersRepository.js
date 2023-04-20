import dataset from '../dataset/users_info.json'

export default function getUsersFromDataset () {
    return dataset
}

exports.getUserbyNameOrder = (name) =>{// action con la cual se iterará sobre los usuarios del dataset, buscando el nombre especificado
    const name_filter = user_info.filter(user => user.name.includes(name))// primer filtro, donde revisamos si el nombre de cada usaurio hace match con el nombre que hemos proporcionado
    const name_state = name_filter.filter(user => user.isActive.includes(true))// segundo filtro, donde revisamos si los usuarios con el mismo nombre tienen o no el estado isActive en true, y en tal caso volver a re-escribir la lista
    const name_order = name_state.sort((name1,name2) => (name1.age < name2.age) ? 1 : (name1.age > name2.age) ? 1 : 0);// tercer filtro, donde ordenamos la lista de usuarios anterior por la edad, de mayor a menor

    if(name_order.length < 1){// verificamos que la lista final no esté vacía, de lo contrario entregamos un 404, indicando que el nombre entregado no pertenece a ningun usuario del dataset
        Response.status(200).json(name_order)// en caso de que la lista no esté vacía, entregamos código 200 con la lista final de usuarios filtrados, en formato.json
    }
    else{
        Response.status(404).console.log("no existen usuarios con este nombre.")
    }
}