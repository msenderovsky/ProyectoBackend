import log4js from 'log4js'

log4js.configure({
    appenders: {
        consola: { type: 'console' },
        appendWarn: { type: "file", filename: "./logs/warn.log" },
        appendError: { type: "file", filename: "./logs/error.log" },

        loggerWarn: { type: "logLevelFilter", appender: "appendWarn", level: "warn" },
        loggerError: { type: "logLevelFilter", appender: "appendError", level: "error" },
    },

    categories: {
        default: { appenders: ['consola'], level: 'all'},
        catWarn: { appenders: ["loggerWarn"], level: "warn" },
        catError: { appenders: ["loggerError"], level: "error" },
    }
})

export const logger = log4js.getLogger('default')
export const myLoggerWarn = log4js.getLogger('warnLog')
export const myLoggerError = log4js.getLogger('errorLog')