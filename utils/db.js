import mongodb from 'mongodb'
import Collection from 'mongodb/lib/collection';
import 'dotenv/config'

const dbClient = class DBClient {
    /**
     *
     */
    host = process.env.DB_HOST //|| 'localhost';
    port = process.env.DB_POST //|| 27017;
    database = process.env.DB_DATABASE //|| 'files_manager';

    constructor() {
        const uri = `mongodb://${this.host}:${this.port}/${this.database}`
        this.client = new mongodb.MongoClient(this.uri)
        this.client.connect()
    }

    isAlive() {
        return this.client.isConnected();
    }
}
export default dbClient;
