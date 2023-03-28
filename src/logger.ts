// Builtin.
import process from 'process';
// 3rd party.
import { isEmpty } from 'lodash';
import {
    createLogger, format, transports, Logger,
} from 'winston';
// Internal.
import { logConfig } from './config';

export type { Logger } from 'winston';

const loggerConfig = {
    level: 'info',
    format: format.combine(
        format.errors({ stack: true }),
        format.timestamp(),
        format.json(),
        format.prettyPrint(),

    ),
    transports: [
        new transports.Console({
            format: format.printf(({
                level, message, timestamp, loggerName, ...meta
            }) => `[${level.toUpperCase()}] ${timestamp} [${process.pid}]: [${loggerName}] ${message} ${isEmpty(meta) ? '' : JSON.stringify(meta)}`),
            handleExceptions: true,
            // json: false,
            level: logConfig.LEVEL,
            silent: logConfig.SILENT,
        }),
    ],
};

const baseLogger: Logger = createLogger(loggerConfig);

export function getLogger(name: string): Logger {
    return baseLogger.child({ loggerName: name });
}
