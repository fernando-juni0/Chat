const db = require('./db.js')


function name(params) {
    
}


module.exports = {
    findAll: async (colecao)=> {
        const firebaseData = await db.collection(colecao).get();
        let arrayData = []
        firebaseData.forEach((doc)=>{
            var data = doc.data()
            data.doc = doc.id

            arrayData.push(data)
        })
        return await Promise.all(arrayData);
    },
    findOne: async (props)=>{
        const firebaseData = await db.collection(props.colecao).get();
        let arrayData = []
        firebaseData.forEach((doc)=>{
            var data = doc.data()
            data.doc = doc.id

            arrayData.push(data)
        })
        await Promise.all(arrayData);
        if (props.doc) {
            let findItem = await arrayData.find(({doc})=>doc == props.doc)
            return findItem
        }
        if (props.where) {
            let whereKeys = Object.keys(props.where)
            let whereValues = Object.values(props.where)
            return arrayData.find((item,index)=>{ return item[whereKeys[index]] == whereValues[index] })
        }
    },
    update: async(colecao, documento, dados)=>{
        await db.collection(colecao).doc(documento).update(dados);
    },
    delete: async(colecao, documento)=>{
        await db.collection(colecao).doc(documento).delete();
    },
    create: async (colecao,name,dados)=> {
        const firebaseData = db.collection(colecao).doc(name);
        await firebaseData.set(dados);
    }    
}
