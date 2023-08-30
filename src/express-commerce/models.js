import knexfile from '../../knexfile.js';
import knex from 'knex';

const env = process.env.NODE_ENV || 'development';
const config = knexfile[env];
const db = new knex(config);

export const getItems = () => db('items').select();

export const getItem = (id) => db('items').select().where('id',parseInt(id)).first();

export const addItem = (item) => db('items').insert(item, 'id');
