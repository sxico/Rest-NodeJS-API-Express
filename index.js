const customExpress = require('./config/customExpress')

const app = customExpress()

app.listen(3000, () => console.info('Servidor escutando a porta 3000'))