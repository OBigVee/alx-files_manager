import { createClient } from 'redis';
import { promisify } from 'util';

const redisClient = class RedisClient {
    constructor() {
            this.client = createClient()
            this.connectClient = true
            this.client.on('error', (err) => {
                console.log(`Redis client not connected to the server:${err.toString()}`)
                this.connectClient = false
            })
            this.client.on('connect', () => {
                this.connectClient = true
            })
        }
        /**
         * 
         * @returns 
         */
    isAlive() {
            return this.connectClient === true ? this.connectClient : this.connectClient = false
        }
        /**
         * 
         * @param {*} key 
         * @returns 
         */
    async get(key) {
            // promisify obj
            const _get = promisify(this.client.get).bind(this.client)
            return await _get(key)
        }
        /**
         * 
         * @param {key} key 
         * @param {value} val 
         * @param {set expire time } duration 
         */
    async set(key, val, duration) {
            // promisify object
            const _set = promisify(this.client.setex).bind(this.client)
            await _set(key, duration, val);
        }
        /**
         * 
         * @param {key} key 
         * @returns 
         */
    async del(key) {
        // promisify obj
        const _del = promisify(this.client.del).bind(this.client);
        return await _del(key)
    }
}

export default new redisClient;