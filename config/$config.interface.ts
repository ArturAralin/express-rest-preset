/* HTTP server settings */
interface Server {
  host: string;
  port: number;
}

/* Logs Settings */
export interface LoggerSettings {
  namespaces: string;
  level: string;
}

/* Common interfaces */
export interface Config {
  app: Server;
  logger: LoggerSettings[];
}
