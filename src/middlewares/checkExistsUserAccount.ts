import express, { Request, Response, NextFunction } from 'express';
import { Petshop } from "../Petshop"
import { Pet } from '../Pet';
import { petshopServices } from '../services/petshopServices';

export async function checkExistsUserAccount(request: Request, response: Response, next: NextFunction) {
    const cnpj = request.headers.cnpj;
    const petshop = await petshopServices.getPetShop(cnpj)
      if (!petshop) {
        return response.status(404).json("error: Petshop inexistente");
      }
    
      next();
    }