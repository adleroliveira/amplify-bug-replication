import type { Schema } from "./resource";

export const handler: Schema['myCustomDataSource']['functionHandler'] = async () => {
    return 'Hello, World!';
}