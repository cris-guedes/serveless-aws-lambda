"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = async () => {
    console.log(process.env.BASE_ENDPOINT_URL);
    console.log(process.env.AUTH_USER);
    console.log(process.env.AUTH_PASSWORD);
};
exports.handler = handler;
//# sourceMappingURL=index.js.map