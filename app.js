let express = require('express');
let app = express();

app.listen(3001, () =>{
    console.log('Server WakeUp')
})

app.get ('/', function (req, res){
    res.send('Hola Mundo!')
});

app.get ('/contact', function(req, res){     // CREA VIRTUALMENTE LA CARPETA /CONTACT
    res.send('Pagina de contacto')
});

app.get ('/array', function(req, res) {     
    res.send([1,2,3,4])
});
app.get ('/objeto', function(req, res) {    
    res.send({
        name: 'Dario',
        apellido: 'Cerioli',
        edad: '47'
})
});

let path = require('path')    // MODULO EXPRESS PARA GENERAR RUTAS MAS FACIL
 
app.get ('/perro', function(req, res) {
    let bernerspath = path.resolve(__dirname, './Material/berners-lee.html');  //resuelve el error de ruta absoluta, indicar --dirname, ruta del archivo
    res.sendFile(bernerspath)   // llamo a la variable q resolvio la ruta
})

app.use(express.static('public'))

