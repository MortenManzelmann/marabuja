import { Request, Response } from 'express';

export interface CrudInterface {
  getAll(request: Request<any>, response: Response<any>): void;
  getById(): void;
  create(): void;
  modify(): void;
  delete(): void;
}