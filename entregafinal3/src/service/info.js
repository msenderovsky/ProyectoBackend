import os from 'os'
const CPUamount= os.cpus().length
export const objInfo = {
        entryArguments: process.argv,
        projectFolder: process.cwd(),
        operativeSystem: process.platform,
        NodeVersion: process.version,
        reservedMemory: process.memoryUsage().rss,
        executionPath: process.title,
        processID: process.pid,
        CPUCount: CPUamount

}