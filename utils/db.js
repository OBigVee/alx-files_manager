import mongodb from 'mongodb';
import 'dotenv/config';

const dbClient = class DBClient {
    /**
     *MongoDB utility
     */
    constructor() {
            const host = process.env.DB_HOST
            const port = process.env.DB_POST
            const database = process.env.DB_DATABASE
            const uri = `mongodb://${host}:${port}/${database}`
            this.client = new mongodb.MongoClient(uri, { useUnifiedTopology: true })
            this.client.connect()
        }
        /**
         * check if the mongodb connection is established
         * @returns <Boolean>
         */
    isAlive() {
            return this.client.isConnected();
            //if (this.client.isConnected()) { return console.log('connected it is') }
        }
        /**
         * nbUsers returns the number of documents in the collection 'users'
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