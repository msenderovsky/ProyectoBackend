const log4js= require ('log4js')

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

module.exports.logger = log4js.getLogger('default')
module.exports.myLoggerWarn = log4js.getLogger('warnLog')
module.exports.myLoggerError = log4js.getLogger('errorLog')