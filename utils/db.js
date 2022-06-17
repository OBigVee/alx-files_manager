import mongodb from 'mongodb';
import 'dotenv/config';

const dbClient = class DBClient {
    /**
     *
     */
    constructor() {
            const host = process.env.DB_HOST || 'localhost';
            const port = process.env.DB_POST || 27017;
            const database = process.env.DB_DATABASE || 'files_manager';
            const uri = `mongodb://${host}:${port}/${database}`
            this.client = new mongodb.MongoClient(uri, { useUnifiedTopology: true })
            this.client.connect()
        }
        /**
         * 
         * @returns 
         */
    isAlive() {
            return this.client.isConnected();
            //if (this.client.isConnected()) { return console.log('connected it is') }
        }
        /**
         * 
         * @returns 
         */
    async nbUsers() {
            return await this.client.db().collection('users').countDocuments()
        }
        /**
         * nbFiles returns the number of documents in the collection 'files'
         * @returns
         */
    async nbFiles() {
        return await this.client.db().collection('files').countDocuments()
    }
}

export default new dbClient;