import {Handler} from 'express';

// GetProducts function, export to routes.ts
export const getProducts: Handler = (req, res) => res.send('Hello World');

export const getProduct: Handler = (req, res) => res.send('Hello World');

export const createProduct: Handler = (req, res) => res.send('Hello World');

export const setProduct: Handler = (req, res) => res.send('Hello World');

export const deleteProduct: Handler = (req, res) => res.send('Hello World');

