import express, { request, response } from 'express';
import {ApolloServer, gql} from 'apollo-server-express';

const app = express();

const server = new ApolloServer({
    typeDefs: gql `
    
    type Client{
        id: ID!
        name: String! 
    }
        
    type Demand {
        id: ID!
        name: String!
        deadline: String
    }

    type Query{
        demands: [Demand]!
    }
    `, 

    resolvers: {
        Query :{
            demands: ()=> [],
        } ,
    },
});

server.applyMiddleware({
    app,
    cors: {
        origin: 'http://localhost:3000',
    },
});

/*server.get('/status', (_, response)=> {
response.send({
    status: 'Okay',
    });
});

const enableCors = cors({origin: 'http://localhost:3000'});


server
.options('/authenticate', enableCors)
.post('/authenticate', enabelCors, express.json(), (request, response)=>{
    console.log(
        'E-mail', request.body.email,
        'Senha', request.body.password
    );
        response.send({
            Okay : true,
        });
        
});*/



const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3000; // configurando uma porta 
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT, '127.0.0.1', () => {
    console.log( `Server is listening at http://${HOSTNAME}:${PORT}. `); //função passado o servidor
});