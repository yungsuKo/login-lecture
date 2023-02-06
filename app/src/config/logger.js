const {createLogger, transports, format} = require('winston');
const {combine, timestamp, printf, label, json, simple, colorize} = format;

const printFormat = printf(({timestamp, label, level, message})=>{
    return `${timestamp} [${label}], ${level} : ${message}`
})

const printLogFormat = {
    combine : combine(
        label({
            label: "백엔드 맛보기"
        }),
        colorize(),
        timestamp({
            format: "YYYY-MM-DD HH:mm:dd"
        }),
        printFormat
    ),
    console : combine(
        colorize(),
        simple()
    ),
}

const options = {
    file : new transports.File({
        filename: "./logs/access.log",
        level: "info",
        format: printLogFormat.combine
    }),    
    console : new transports.Console({
        level: "info",
        format: printLogFormat.console
    })
}

const logger = createLogger({
    transports: [
        options.file
    ]
})

if(process.env.NODE_ENV !== "production"){
    logger.add(
        options.console
    )

}

module.exports = logger;