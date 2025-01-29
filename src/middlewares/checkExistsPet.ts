import express, { Request, Response, NextFunction } from 'express';
import { Petshop } from "../Petshop"
import { Pet } from '../Pet';
import { petService } from '../services/petServices';


export function checkExistsPet(request: Request, response: Response, next: NextFunction) {
    const id = request.params.id;
    const pet = petService.getPet(id)
    if (!pet) {
        return response.status(404).json("error: Petshop inexistente");
      }
    
      next();
    }