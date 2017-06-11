declare module 'express-promise-router' {
  import { Router } from 'express';
  
  function PromiseRouter(): Router;

  export = PromiseRouter;
}
