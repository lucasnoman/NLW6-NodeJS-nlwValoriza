"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/test', function (request, response) {
    return response.send('Olá NLW!');
});
app.post('/test-post', function (request, response) {
    return response.send('Olá NLW post');
});
app.listen('3333', function () {
    console.log('🌐 server is running!');
});
