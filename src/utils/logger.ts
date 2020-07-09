import { FolderLogger } from 'folder-logger'

// * Folder location to store logs
const path = `${process.cwd()}/logs/`

// * Create a logger instance
export const Logger = new FolderLogger(path)
