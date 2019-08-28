"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _methods = require("./methods");

const WorkersKVREST = function ({
  cfAccountId,
  cfEmail,
  cfAuthKey,
  namespaceId = ''
}) {
  const host = 'api.cloudflare.com';
  const basePath = `/client/v4/accounts/${cfAccountId}/storage/kv/namespaces`;
  const headers = {
    'X-Auth-Email': cfEmail,
    'X-Auth-Key': cfAuthKey
  };
  const baseInputs = {
    host,
    basePath,
    namespaceId,
    headers
  };
  const API = {};
  Object.entries(_methods.METHODS).forEach(([name, fn]) => API[name] = fn(baseInputs));
  return API;
};

var _default = WorkersKVREST;
exports.default = _default;