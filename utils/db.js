import mongodb from 'mongodb';
import 'dotenv/config';

 const dbClient =  class DBClient {
    /**
     *
     */
    constructor() {
        const host = process.env.DB_HOST //|| 'localhost';
        const port = process.env.DB_POST //|| 27017;
        const database = process.env.DB_DATABASE //|| 'files_manager';
        const uri = `mongodb://${this.host}:${this.port}/${this.database}`
        this.client = new mongodb.MongoClient(uri, { useUnifiedTopology: true })
        this.client.connect()
    }

    isAlive() {
        return this.client.isConnected();
    }
    async nbUsers(){
        return await this.client.db.collection('users').countDocuments()
    }
    async nbFiles(){

    }
}

export default new dbClient;
