interface Server {
  host: string;
  port: number;
}

export interface Config {
  app: Server;
}
