import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routeMovie from '../routes/movie';
import db from '../db/connection';

class Server{
    private app: express.Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnection();
    }

   listen(){
        this.app.listen(this.port, () => {
            console.log(`Aplicacion corriendo en el puerto ${this.port}`)
        })
    }

    routes(){
        this.app.get('/', (req: Request, res:Response) => {
            res.json({
                msg: 'API working'
            })
        })
     this.app.use('/api/movies', routeMovie)
    }

    midlewares(){
        this.app.use(express.json());

        //cors
        this.app.use(cors());
    }

    async dbConnection(){
        try{
            await db.authenticate();
            console.log('Base de datos conectada')
        }
        catch(error){
            console.log(error);
            console.log('Error al conectarse a la base de datos')
        }
    }
}
export default Server;