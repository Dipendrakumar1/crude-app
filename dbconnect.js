const mongoose = require('mongoose');
async function handleDatabaseConnect(url) {
    await mongoose.connect(url).then(() => {
        console.log('MongoDB Connected SuccessFully.');
    }).catch((err) => {
        console.log('Erro: ', err)
    });
}
module.exports={handleDatabaseConnect,
};