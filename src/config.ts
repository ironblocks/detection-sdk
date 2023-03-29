// Builtin.
import path from 'path';
// 3rd party.
import dotenv from 'dotenv';

const nodeEnv = process.env.NODE_ENV?.toLowerCase();

// Load dotenv variables.
const dotEnvFilename = () => {
    switch (nodeEnv) {
    case 'dev':
        return '.env.dev';
    case 'test':
        return '.env.test';
    default:
        return '.env';
    }
};
dotenv.config({ path: path.join(__dirname, '..', dotEnvFilename()) });

/**
 * Server.
 */
export const serverConfig = {
    HOST: process.env.HOST ?? 'localhost',
    PORT: parseInt(process.env.PORT ?? '8000'),
};

/**
 * Log.
 */
export const logConfig = {
    SILENT: process.env.LOGGER_SILENT?.toLocaleLowerCase() === 'true',
    LEVEL: process.env.LOGGER_LEVEL?.toLocaleLowerCase() ?? 'debug',
};

function validateSubConfig(subConfig: { [key: string]: any}) {
    Object.entries(subConfig).forEach(([key, value]) => {
        if (value === undefined) {
            throw new Error(`Bad config, missing configuration for ${key}`);
        }
    });
}

export function validateConfig() {
    const configurations = [
        serverConfig,
        logConfig,
    ];

    configurations.forEach((config) => validateSubConfig(config));
}
