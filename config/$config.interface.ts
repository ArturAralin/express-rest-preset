/* HTTP server settings */
interface Server {
  host: string;
  port: number;
}

/* Logs Settings */
export interface LoggerSettings {
  level: string;
}

/* Common interfaces */
export interface Config {
  env: string;
  app: Server;
  logger: { [name: string]: LoggerSettings };
}
