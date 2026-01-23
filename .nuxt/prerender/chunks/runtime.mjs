import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { defineEventHandler, handleCacheHeaders, splitCookiesString, isEvent, createEvent, fetchWithEvent, getRequestHeader, eventHandler, setHeaders, sendRedirect, proxyRequest, setResponseStatus, setResponseHeader, send, getRequestHeaders, removeResponseHeader, createError, getResponseHeader, setHeader, createApp, createRouter as createRouter$1, toNodeListener, lazyEventHandler } from 'file:///Users/icon/ico/uhtairdrop/node_modules/h3/dist/index.mjs';
import { createFetch as createFetch$1, Headers as Headers$1 } from 'file:///Users/icon/ico/uhtairdrop/node_modules/ofetch/dist/node.mjs';
import destr from 'file:///Users/icon/ico/uhtairdrop/node_modules/destr/dist/index.mjs';
import { createCall, createFetch } from 'file:///Users/icon/ico/uhtairdrop/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file:///Users/icon/ico/uhtairdrop/node_modules/hookable/dist/index.mjs';
import { klona } from 'file:///Users/icon/ico/uhtairdrop/node_modules/klona/dist/index.mjs';
import { snakeCase } from 'file:///Users/icon/ico/uhtairdrop/node_modules/scule/dist/index.mjs';
import defu, { defuFn } from 'file:///Users/icon/ico/uhtairdrop/node_modules/defu/dist/defu.mjs';
import { hash } from 'file:///Users/icon/ico/uhtairdrop/node_modules/ohash/dist/index.mjs';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, decodePath, withLeadingSlash, withoutTrailingSlash } from 'file:///Users/icon/ico/uhtairdrop/node_modules/ufo/dist/index.mjs';
import { createStorage, defineDriver, prefixStorage } from 'file:///Users/icon/ico/uhtairdrop/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file:///Users/icon/ico/uhtairdrop/node_modules/unstorage/drivers/fs.mjs';
import fsDriver from 'file:///Users/icon/ico/uhtairdrop/node_modules/unstorage/drivers/fs-lite.mjs';
import lruCache from 'file:///Users/icon/ico/uhtairdrop/node_modules/unstorage/drivers/lru-cache.mjs';
import { toRouteMatcher, createRouter } from 'file:///Users/icon/ico/uhtairdrop/node_modules/radix3/dist/index.mjs';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'file:///Users/icon/ico/uhtairdrop/node_modules/pathe/dist/index.mjs';

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  nuxtIcon: {
    aliases: {
      person: "mdi:account",
      menu: "mdi:menu"
    }
  }
});

const inlineAppConfig = {
  "nuxt": {
    "buildId": "b54a382c-e0c8-44c4-b816-e2efa452a6cc"
  }
};

const appConfig = defuFn(appConfig0, inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/api/**": {
        "cache": false
      },
      "/_nuxt/builds/meta/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      },
      "/_nuxt/builds/**": {
        "headers": {
          "cache-control": "public, max-age=1, immutable"
        }
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {}
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  applyEnv(runtimeConfig, envOptions);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
const _sharedAppConfig = _deepFreeze(klona(appConfig));
function useAppConfig(event) {
  {
    return _sharedAppConfig;
  }
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const serverAssets = [{"baseName":"server","dir":"/Users/icon/ico/uhtairdrop/server/assets"}];

const assets$1 = createStorage();

for (const asset of serverAssets) {
  assets$1.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const normalizeFsKey = (item) => item.replaceAll(":", "_");
const _47Users_47icon_47ico_47uhtairdrop_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js = defineDriver((opts) => {
  const fs = fsDriver({ base: opts.base });
  const lru = lruCache({ max: 1e3 });
  return {
    ...fs,
    // fall back to file system - only the bottom three methods are used in renderer
    async setItem(key, value, opts2) {
      await Promise.all([
        fs.setItem(normalizeFsKey(key), value, opts2),
        lru.setItem(key, value, opts2)
      ]);
    },
    async hasItem(key, opts2) {
      return await lru.hasItem(key, opts2) || await fs.hasItem(normalizeFsKey(key), opts2);
    },
    async getItem(key, opts2) {
      return await lru.getItem(key, opts2) || await fs.getItem(normalizeFsKey(key), opts2);
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('internal:nuxt:prerender', _47Users_47icon_47ico_47uhtairdrop_47node_modules_47nuxt_47dist_47core_47runtime_47nitro_47cache_45driver_46js({"driver":"/Users/icon/ico/uhtairdrop/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js","base":"/Users/icon/ico/uhtairdrop/.nuxt/cache/nitro/prerender"}));
storage.mount('data', fsDriver({"driver":"fsLite","base":"/Users/icon/ico/uhtairdrop/.data/kv"}));
storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/icon/ico/uhtairdrop","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","readOnly":true,"base":"/Users/icon/ico/uhtairdrop/server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/icon/ico/uhtairdrop/.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","readOnly":false,"base":"/Users/icon/ico/uhtairdrop/.nuxt/cache","ignore":["**/node_modules/**","**/.git/**"]}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.path,
    statusCode,
    statusMessage,
    message,
    stack: "",
    // TODO: check and validate error.data for serialisation into query
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    return send(event, JSON.stringify(errorObject));
  }
  const reqHeaders = getRequestHeaders(event);
  const isRenderingError = event.path.startsWith("/__nuxt_error") || !!reqHeaders["x-nuxt-error"];
  const res = isRenderingError ? null : await useNitroApp().localFetch(
    withQuery(joinURL(useRuntimeConfig(event).app.baseURL, "/__nuxt_error"), errorObject),
    {
      headers: { ...reqHeaders, "x-nuxt-error": "true" },
      redirect: "manual"
    }
  ).catch(() => null);
  if (!res) {
    const { template } = await import('./_/error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    return send(event, template(errorObject));
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  return send(event, html);
});

const assets = {
  "/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2804-obByWNtHnSh8eu0vkIsgylYxcp0\"",
    "mtime": "2025-11-21T09:53:24.018Z",
    "size": 10244,
    "path": "../../.output/public/.DS_Store"
  },
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.845Z",
    "size": 4405,
    "path": "../../.output/public/200.html"
  },
  "/404.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.845Z",
    "size": 4405,
    "path": "../../.output/public/404.html"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.845Z",
    "size": 4405,
    "path": "../../.output/public/index.html"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"1-31gkjEFPNCyB4Fa0C+4S0XoIv2E\"",
    "mtime": "2025-11-21T09:53:24.018Z",
    "size": 1,
    "path": "../../.output/public/robots.txt"
  },
  "/Dashboard/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.844Z",
    "size": 4405,
    "path": "../../.output/public/Dashboard/index.html"
  },
  "/images/.DS_Store": {
    "type": "text/plain; charset=utf-8",
    "etag": "\"2804-RxAQcER49fRaraJFXpM9ZNVHWTs\"",
    "mtime": "2025-11-21T09:53:23.995Z",
    "size": 10244,
    "path": "../../.output/public/images/.DS_Store"
  },
  "/images/action-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"213cc-SUVTzNvBO0UPyjtTMJTGYb9chNo\"",
    "mtime": "2025-11-21T09:53:23.978Z",
    "size": 136140,
    "path": "../../.output/public/images/action-bg.jpg"
  },
  "/images/advisors1.png": {
    "type": "image/png",
    "etag": "\"6550-kld+poODU3x9AzXO153OpHelHgE\"",
    "mtime": "2025-11-21T09:53:23.992Z",
    "size": 25936,
    "path": "../../.output/public/images/advisors1.png"
  },
  "/images/advisors2.png": {
    "type": "image/png",
    "etag": "\"d781-lZpJod09RH9ITDlnYFkj2o5arG0\"",
    "mtime": "2025-11-21T09:53:23.992Z",
    "size": 55169,
    "path": "../../.output/public/images/advisors2.png"
  },
  "/images/advisors3.png": {
    "type": "image/png",
    "etag": "\"12e6e-dpL2QVNFHLhPv8j2v6phqusayBk\"",
    "mtime": "2025-11-21T09:53:23.993Z",
    "size": 77422,
    "path": "../../.output/public/images/advisors3.png"
  },
  "/images/advisors4.png": {
    "type": "image/png",
    "etag": "\"15027-3XheKWZ+xBinjK+3V7J9XzzDfXM\"",
    "mtime": "2025-11-21T09:53:23.983Z",
    "size": 86055,
    "path": "../../.output/public/images/advisors4.png"
  },
  "/images/advisors5.png": {
    "type": "image/png",
    "etag": "\"157b9-xL2o15chOVUqBOYqU8as77d/ViU\"",
    "mtime": "2025-11-21T09:53:23.983Z",
    "size": 87993,
    "path": "../../.output/public/images/advisors5.png"
  },
  "/images/advisors6.png": {
    "type": "image/png",
    "etag": "\"15960-J8PliIuRlY7OWk0ONzvJMy0DzYM\"",
    "mtime": "2025-11-21T09:53:23.984Z",
    "size": 88416,
    "path": "../../.output/public/images/advisors6.png"
  },
  "/images/advisors7.png": {
    "type": "image/png",
    "etag": "\"13923-lkw5O+0r/+eskegdoCw4SM1kWuI\"",
    "mtime": "2025-11-21T09:53:23.986Z",
    "size": 80163,
    "path": "../../.output/public/images/advisors7.png"
  },
  "/images/advisors8.png": {
    "type": "image/png",
    "etag": "\"12750-Gt9La2AlMdlyhWHKKUlSVBjIwZs\"",
    "mtime": "2025-11-21T09:53:23.989Z",
    "size": 75600,
    "path": "../../.output/public/images/advisors8.png"
  },
  "/images/check_white.svg": {
    "type": "image/svg+xml",
    "etag": "\"b9-wmQ7G053bwbM4SlzcGuAuJvlMzc\"",
    "mtime": "2025-11-21T09:53:23.988Z",
    "size": 185,
    "path": "../../.output/public/images/check_white.svg"
  },
  "/images/claimed.jpg": {
    "type": "image/jpeg",
    "etag": "\"1333d-zEWQvBzU/cZkU1pc1QM55/fRQic\"",
    "mtime": "2025-11-21T09:53:23.991Z",
    "size": 78653,
    "path": "../../.output/public/images/claimed.jpg"
  },
  "/images/close.svg": {
    "type": "image/svg+xml",
    "etag": "\"d9-o3Ve1kJKjHJukEqu9Oy3r1wdEFo\"",
    "mtime": "2025-11-21T09:53:23.988Z",
    "size": 217,
    "path": "../../.output/public/images/close.svg"
  },
  "/images/close_black.svg": {
    "type": "image/svg+xml",
    "etag": "\"d9-vlVxEKEFMMp/S0F9vnBam0hGzUs\"",
    "mtime": "2025-11-21T09:53:24.009Z",
    "size": 217,
    "path": "../../.output/public/images/close_black.svg"
  },
  "/images/drive-innovation.png": {
    "type": "image/png",
    "etag": "\"9d9-Cwbds/bgh4F50/aErXJW6rZ5iz0\"",
    "mtime": "2025-11-21T09:53:23.995Z",
    "size": 2521,
    "path": "../../.output/public/images/drive-innovation.png"
  },
  "/images/earn-rewards.png": {
    "type": "image/png",
    "etag": "\"9d4-Ge4NhpU3AUKXhT2uUwpNR89oOYo\"",
    "mtime": "2025-11-21T09:53:23.995Z",
    "size": 2516,
    "path": "../../.output/public/images/earn-rewards.png"
  },
  "/images/hambuger.svg": {
    "type": "image/svg+xml",
    "etag": "\"15b-lyN6SRX3hVOK7IIprhZoB3seD6I\"",
    "mtime": "2025-11-21T09:53:23.995Z",
    "size": 347,
    "path": "../../.output/public/images/hambuger.svg"
  },
  "/images/hamburger.svg": {
    "type": "image/svg+xml",
    "etag": "\"1d9-wf8VsDcQ+xF7m8xKLK3PZ8Pe7sQ\"",
    "mtime": "2025-11-21T09:53:23.977Z",
    "size": 473,
    "path": "../../.output/public/images/hamburger.svg"
  },
  "/images/headerlogo.png": {
    "type": "image/png",
    "etag": "\"13ce-Z3WrdErp87YsnM0+/qZY3I2vfgU\"",
    "mtime": "2025-11-21T09:53:23.995Z",
    "size": 5070,
    "path": "../../.output/public/images/headerlogo.png"
  },
  "/images/home-bg-mini.jpg": {
    "type": "image/jpeg",
    "etag": "\"13b10-OnQNG7V6a9aWt8ldfX+DVng/WQk\"",
    "mtime": "2025-11-21T09:53:24.002Z",
    "size": 80656,
    "path": "../../.output/public/images/home-bg-mini.jpg"
  },
  "/images/home-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"136f6-UddcJXd3UU8DznW5QK6Vj7x1ia0\"",
    "mtime": "2025-11-21T09:53:24.000Z",
    "size": 79606,
    "path": "../../.output/public/images/home-bg.jpg"
  },
  "/images/nft1.jpg": {
    "type": "image/jpeg",
    "etag": "\"15554-4iIrtCi4ONLonRGmtmPGkw7QYk8\"",
    "mtime": "2025-11-21T09:53:23.999Z",
    "size": 87380,
    "path": "../../.output/public/images/nft1.jpg"
  },
  "/images/nft10.jpg": {
    "type": "image/jpeg",
    "etag": "\"d165-OHdtgQYFLrESMevHD00rQVdJsDs\"",
    "mtime": "2025-11-21T09:53:23.997Z",
    "size": 53605,
    "path": "../../.output/public/images/nft10.jpg"
  },
  "/images/nft11.jpg": {
    "type": "image/jpeg",
    "etag": "\"10eb6-PMfSEa8+n3sOkhnmBu8W+cdPxqc\"",
    "mtime": "2025-11-21T09:53:24.006Z",
    "size": 69302,
    "path": "../../.output/public/images/nft11.jpg"
  },
  "/images/nft2.jpg": {
    "type": "image/jpeg",
    "etag": "\"eff7-eQ0HiIB0U6g5iw9qTeU3zltKp2I\"",
    "mtime": "2025-11-21T09:53:23.996Z",
    "size": 61431,
    "path": "../../.output/public/images/nft2.jpg"
  },
  "/images/nft3.jpg": {
    "type": "image/jpeg",
    "etag": "\"d017-BcZWDKBW3NXHaVu0Lo6G8XrkaPE\"",
    "mtime": "2025-11-21T09:53:24.006Z",
    "size": 53271,
    "path": "../../.output/public/images/nft3.jpg"
  },
  "/images/nft4.jpg": {
    "type": "image/jpeg",
    "etag": "\"133a7-7SE0GVjmYCvrLlHJareznRI0V04\"",
    "mtime": "2025-11-21T09:53:23.998Z",
    "size": 78759,
    "path": "../../.output/public/images/nft4.jpg"
  },
  "/images/nft5.jpg": {
    "type": "image/jpeg",
    "etag": "\"17377-NDcrjxpqfus5rsL5jAi+iwggrR0\"",
    "mtime": "2025-11-21T09:53:24.003Z",
    "size": 95095,
    "path": "../../.output/public/images/nft5.jpg"
  },
  "/images/nft6.jpg": {
    "type": "image/jpeg",
    "etag": "\"1125b-FRo51Nu4tu42RiKSsRZlkfORcjo\"",
    "mtime": "2025-11-21T09:53:24.001Z",
    "size": 70235,
    "path": "../../.output/public/images/nft6.jpg"
  },
  "/images/nft7.jpg": {
    "type": "image/jpeg",
    "etag": "\"f8af-s9rS7TcIW4h+6GqjlHuse40xJP4\"",
    "mtime": "2025-11-21T09:53:24.002Z",
    "size": 63663,
    "path": "../../.output/public/images/nft7.jpg"
  },
  "/images/nft8.jpg": {
    "type": "image/jpeg",
    "etag": "\"104de-1DAuDRBOTziZE3CaXu1dWGY22lA\"",
    "mtime": "2025-11-21T09:53:24.002Z",
    "size": 66782,
    "path": "../../.output/public/images/nft8.jpg"
  },
  "/images/nft9.jpg": {
    "type": "image/jpeg",
    "etag": "\"c82f-HZ82yng6TgO7yKkdYCd2tAB/3CY\"",
    "mtime": "2025-11-21T09:53:24.003Z",
    "size": 51247,
    "path": "../../.output/public/images/nft9.jpg"
  },
  "/images/partners1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"12d6-jqJYGSGpyb1ihqsb1vOpnYy3mZg\"",
    "mtime": "2025-11-21T09:53:24.004Z",
    "size": 4822,
    "path": "../../.output/public/images/partners1.jpeg"
  },
  "/images/partners2.jpeg": {
    "type": "image/jpeg",
    "etag": "\"2762-WahvdVu9aM0Zq+5jOzMzB7uh6WY\"",
    "mtime": "2025-11-21T09:53:24.004Z",
    "size": 10082,
    "path": "../../.output/public/images/partners2.jpeg"
  },
  "/images/partners3.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1975-BvePIasnONgajiBKThM87w1nRO8\"",
    "mtime": "2025-11-21T09:53:24.003Z",
    "size": 6517,
    "path": "../../.output/public/images/partners3.jpeg"
  },
  "/images/partners4.jpeg": {
    "type": "image/jpeg",
    "etag": "\"17d2-FQoQfR6LxIT7vb4kKUWv7FdDfjU\"",
    "mtime": "2025-11-21T09:53:24.004Z",
    "size": 6098,
    "path": "../../.output/public/images/partners4.jpeg"
  },
  "/images/partners5.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1eb5-EPUVpTImeuc/RZtqkeWHRgn1/7I\"",
    "mtime": "2025-11-21T09:53:24.005Z",
    "size": 7861,
    "path": "../../.output/public/images/partners5.jpeg"
  },
  "/images/partners6.jpeg": {
    "type": "image/jpeg",
    "etag": "\"225c-coHqSTf+cSgBD6O7h2o5WJUE8Es\"",
    "mtime": "2025-11-21T09:53:24.006Z",
    "size": 8796,
    "path": "../../.output/public/images/partners6.jpeg"
  },
  "/images/partners7.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1f33-blzcXwkVL3ZUS6ihlsEksgam6gM\"",
    "mtime": "2025-11-21T09:53:24.005Z",
    "size": 7987,
    "path": "../../.output/public/images/partners7.jpeg"
  },
  "/images/partners8.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1541-dIRosDjHcy7VlzrELasdgklf/aU\"",
    "mtime": "2025-11-21T09:53:24.007Z",
    "size": 5441,
    "path": "../../.output/public/images/partners8.jpeg"
  },
  "/images/previoushome-bg-mini.jpg": {
    "type": "image/jpeg",
    "etag": "\"154b3-3fXtMJ8/1EDjr0BWd4a/WHGPuPw\"",
    "mtime": "2025-11-21T09:53:23.978Z",
    "size": 87219,
    "path": "../../.output/public/images/previoushome-bg-mini.jpg"
  },
  "/images/previouss-home-bg.jpg": {
    "type": "image/jpeg",
    "etag": "\"1da06-5vI0THISA6YKekCbOkOq2NgWpEg\"",
    "mtime": "2025-11-21T09:53:24.008Z",
    "size": 121350,
    "path": "../../.output/public/images/previouss-home-bg.jpg"
  },
  "/images/refresh.svg": {
    "type": "image/svg+xml",
    "etag": "\"26d-dX0/BI5RbmtBTkpNXLYUd5q0lb4\"",
    "mtime": "2025-11-21T09:53:24.007Z",
    "size": 621,
    "path": "../../.output/public/images/refresh.svg"
  },
  "/images/shop-smart.png": {
    "type": "image/png",
    "etag": "\"8f5-12BMeS4je/50bVJSnE7koDyEC18\"",
    "mtime": "2025-11-21T09:53:24.007Z",
    "size": 2293,
    "path": "../../.output/public/images/shop-smart.png"
  },
  "/images/slider-Decentralized-Science.a21bc01cca31b8771b2e.jpg": {
    "type": "image/jpeg",
    "etag": "\"84c1-EPr6Ojih1PkGN3mswseCwKuEDWk\"",
    "mtime": "2025-11-21T09:53:24.008Z",
    "size": 33985,
    "path": "../../.output/public/images/slider-Decentralized-Science.a21bc01cca31b8771b2e.jpg"
  },
  "/images/slider-Gamified-Preventive-Healthcare.f9b62846cb8c1f649842.jpg": {
    "type": "image/jpeg",
    "etag": "\"891e-hvIcdVaflqqBtdqndRMQtEuZSVM\"",
    "mtime": "2025-11-21T09:53:24.008Z",
    "size": 35102,
    "path": "../../.output/public/images/slider-Gamified-Preventive-Healthcare.f9b62846cb8c1f649842.jpg"
  },
  "/images/slider-Health-Data.5d21be8bbe701102308a.jpg": {
    "type": "image/jpeg",
    "etag": "\"cbb5-5iU7ZcgP3cA44cqOItBpPLW9ymo\"",
    "mtime": "2025-11-21T09:53:24.008Z",
    "size": 52149,
    "path": "../../.output/public/images/slider-Health-Data.5d21be8bbe701102308a.jpg"
  },
  "/images/slider-Health-Marketplace.7e22a35193f49325fd74.jpg": {
    "type": "image/jpeg",
    "etag": "\"cd79-qpTtid4rjt+iiatMcA/ZCxdTen0\"",
    "mtime": "2025-11-21T09:53:24.010Z",
    "size": 52601,
    "path": "../../.output/public/images/slider-Health-Marketplace.7e22a35193f49325fd74.jpg"
  },
  "/images/slider-Healthcare-1.1f06694de1e4a4c6a809.jpg": {
    "type": "image/jpeg",
    "etag": "\"106e4-h9yr1bPVFvr/jGpjI8X+gJTSc0c\"",
    "mtime": "2025-11-21T09:53:24.011Z",
    "size": 67300,
    "path": "../../.output/public/images/slider-Healthcare-1.1f06694de1e4a4c6a809.jpg"
  },
  "/images/slider-Healthcare-2.2697b4f77a71fa6616de.jpg": {
    "type": "image/jpeg",
    "etag": "\"1113b-scA/PX1Fd71SewlByRwg2RxcuZc\"",
    "mtime": "2025-11-21T09:53:24.009Z",
    "size": 69947,
    "path": "../../.output/public/images/slider-Healthcare-2.2697b4f77a71fa6616de.jpg"
  },
  "/images/slider-Healthcare-3.b16d55bc52319f9de97d.jpg": {
    "type": "image/jpeg",
    "etag": "\"11873-IjY4rTScJMsI0L5yW2j35YNsQ5U\"",
    "mtime": "2025-11-21T09:53:24.011Z",
    "size": 71795,
    "path": "../../.output/public/images/slider-Healthcare-3.b16d55bc52319f9de97d.jpg"
  },
  "/images/slider-Healthcare-4.303d968377e164707e1d.jpg": {
    "type": "image/jpeg",
    "etag": "\"10d86-AEBCfHWaZUJYifaBO2GQaDAdWaU\"",
    "mtime": "2025-11-21T09:53:24.011Z",
    "size": 68998,
    "path": "../../.output/public/images/slider-Healthcare-4.303d968377e164707e1d.jpg"
  },
  "/images/track-health.png": {
    "type": "image/png",
    "etag": "\"9ba-Ib5so0cESYZAUil/iULdMEH543M\"",
    "mtime": "2025-11-21T09:53:24.011Z",
    "size": 2490,
    "path": "../../.output/public/images/track-health.png"
  },
  "/images/uht-jar.jpg": {
    "type": "image/jpeg",
    "etag": "\"1bb82-Bi0Lf8gq16QUG4dDpdGBE3kh+Io\"",
    "mtime": "2025-11-21T09:53:24.012Z",
    "size": 113538,
    "path": "../../.output/public/images/uht-jar.jpg"
  },
  "/images/uht.png": {
    "type": "image/png",
    "etag": "\"42a6-Q9uFC+rhDRYnoyMoQ8BBqxhPXs0\"",
    "mtime": "2025-11-21T09:53:24.016Z",
    "size": 17062,
    "path": "../../.output/public/images/uht.png"
  },
  "/images/uhtlogo.png": {
    "type": "image/png",
    "etag": "\"d63e-clfTxwivUhSPUV973zShhmxg6rg\"",
    "mtime": "2025-11-21T09:53:24.013Z",
    "size": 54846,
    "path": "../../.output/public/images/uhtlogo.png"
  },
  "/images/vishal.png": {
    "type": "image/png",
    "etag": "\"1dcce-1DEhZUTM2UB9P4wi/Bv0QunK3lA\"",
    "mtime": "2025-11-21T09:53:24.016Z",
    "size": 122062,
    "path": "../../.output/public/images/vishal.png"
  },
  "/images/vision.jpg": {
    "type": "image/jpeg",
    "etag": "\"bd31-fs5RfipqR3ejwpSW7/LdQegVfVc\"",
    "mtime": "2025-11-21T09:53:24.015Z",
    "size": 48433,
    "path": "../../.output/public/images/vision.jpg"
  },
  "/images/yat_sui.png": {
    "type": "image/png",
    "etag": "\"17482-Z6kb5Okil+PR/MOX+swqQVlKcsU\"",
    "mtime": "2025-11-21T09:53:24.016Z",
    "size": 95362,
    "path": "../../.output/public/images/yat_sui.png"
  },
  "/images/zeneca.png": {
    "type": "image/png",
    "etag": "\"2fdcf-6+Zb1jVa4FJKW1lUr5kwsnofwyY\"",
    "mtime": "2025-11-21T09:53:24.016Z",
    "size": 196047,
    "path": "../../.output/public/images/zeneca.png"
  },
  "/_nuxt/-PZ8JFYE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a503-IShNZukOTuFnJ4jzbDQfTB9hsqY\"",
    "mtime": "2025-11-21T09:53:23.961Z",
    "size": 42243,
    "path": "../../.output/public/_nuxt/-PZ8JFYE.js"
  },
  "/_nuxt/-VgY4l0c.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18c-B9EA+hwIXUZWZZWHgfQOm0ma0JA\"",
    "mtime": "2025-11-21T09:53:23.961Z",
    "size": 396,
    "path": "../../.output/public/_nuxt/-VgY4l0c.js"
  },
  "/_nuxt/-unWf778.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6c5-xx3EjsCMIc+BKQNnBwDoWGe2bGk\"",
    "mtime": "2025-11-21T09:53:23.961Z",
    "size": 1733,
    "path": "../../.output/public/_nuxt/-unWf778.js"
  },
  "/_nuxt/1t5Je8EZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17a-DVJfuUxrvqPsM3pUrR6CPnLs2kQ\"",
    "mtime": "2025-11-21T09:53:23.933Z",
    "size": 378,
    "path": "../../.output/public/_nuxt/1t5Je8EZ.js"
  },
  "/_nuxt/2SVdkcCb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f7-ML6lhjQ71a4OKYZhxBIDBdcjdsU\"",
    "mtime": "2025-11-21T09:53:23.933Z",
    "size": 503,
    "path": "../../.output/public/_nuxt/2SVdkcCb.js"
  },
  "/_nuxt/4NsDrJyN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"16b6-qNxSFk7bBmQB0demollermG2rHs\"",
    "mtime": "2025-11-21T09:53:23.933Z",
    "size": 5814,
    "path": "../../.output/public/_nuxt/4NsDrJyN.js"
  },
  "/_nuxt/5N9_71eC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9bd-j/ZLS3sYsQWvsFPumD7keIUKats\"",
    "mtime": "2025-11-21T09:53:23.933Z",
    "size": 2493,
    "path": "../../.output/public/_nuxt/5N9_71eC.js"
  },
  "/_nuxt/5tMXuxow.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18a-ctijC3x38X3NOHYEt86Tv2T8OzE\"",
    "mtime": "2025-11-21T09:53:23.934Z",
    "size": 394,
    "path": "../../.output/public/_nuxt/5tMXuxow.js"
  },
  "/_nuxt/84yV3Mui.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"bc1-coj4Zfp0h4OSLA16qngj4Xhqxg8\"",
    "mtime": "2025-11-21T09:53:23.934Z",
    "size": 3009,
    "path": "../../.output/public/_nuxt/84yV3Mui.js"
  },
  "/_nuxt/9yaQbRaA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"27ac-jOrWp4URBRN5M2x8ektoMd/Ym1c\"",
    "mtime": "2025-11-21T09:53:23.933Z",
    "size": 10156,
    "path": "../../.output/public/_nuxt/9yaQbRaA.js"
  },
  "/_nuxt/B0PwvC0I.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"53-tmuYWdPW4ZGuVdJX7QEXFcrKVec\"",
    "mtime": "2025-11-21T09:53:23.934Z",
    "size": 83,
    "path": "../../.output/public/_nuxt/B0PwvC0I.js"
  },
  "/_nuxt/B28QA65d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1149-x6xcbyFfZACdKc8TfXtT8Y1QFAo\"",
    "mtime": "2025-11-21T09:53:23.934Z",
    "size": 4425,
    "path": "../../.output/public/_nuxt/B28QA65d.js"
  },
  "/_nuxt/B3FXzDs5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3d6-SuJFWFr84cUJtiWOjvJTBLYar8c\"",
    "mtime": "2025-11-21T09:53:23.934Z",
    "size": 982,
    "path": "../../.output/public/_nuxt/B3FXzDs5.js"
  },
  "/_nuxt/B4yFTh9b.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"274-AF8Gr68XcGvF0KuR8QYLNHx7UgA\"",
    "mtime": "2025-11-21T09:53:23.934Z",
    "size": 628,
    "path": "../../.output/public/_nuxt/B4yFTh9b.js"
  },
  "/_nuxt/B6DEj0_e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d91-9yd3ds6xrWk/UdnKs1qhm6tommw\"",
    "mtime": "2025-11-21T09:53:23.934Z",
    "size": 3473,
    "path": "../../.output/public/_nuxt/B6DEj0_e.js"
  },
  "/_nuxt/B8bSwCll.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b39e-Ai3O/s5QFE/nWXS0ItYJUFTQo+U\"",
    "mtime": "2025-11-21T09:53:23.935Z",
    "size": 45982,
    "path": "../../.output/public/_nuxt/B8bSwCll.js"
  },
  "/_nuxt/BElrvSMJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2bc-tkWja0wnhGSL+nZzHwy6n+aaS88\"",
    "mtime": "2025-11-21T09:53:23.934Z",
    "size": 700,
    "path": "../../.output/public/_nuxt/BElrvSMJ.js"
  },
  "/_nuxt/BEzOdVLG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bd1b-smVIk3kmTvrGsan5Q7pEz5whGR0\"",
    "mtime": "2025-11-21T09:53:23.935Z",
    "size": 113947,
    "path": "../../.output/public/_nuxt/BEzOdVLG.js"
  },
  "/_nuxt/BFRmLPsM.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"136-wKuv0cOK04W7beY9RRtmxhmmU50\"",
    "mtime": "2025-11-21T09:53:23.935Z",
    "size": 310,
    "path": "../../.output/public/_nuxt/BFRmLPsM.js"
  },
  "/_nuxt/BGcW-7l_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c36-uH2px3Cejp37/Vl8T6R7Xncj25Y\"",
    "mtime": "2025-11-21T09:53:23.935Z",
    "size": 3126,
    "path": "../../.output/public/_nuxt/BGcW-7l_.js"
  },
  "/_nuxt/BH4sU5EC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7ba-iU0BE94Cu7jdouHS9qnFwc+NSvc\"",
    "mtime": "2025-11-21T09:53:23.936Z",
    "size": 1978,
    "path": "../../.output/public/_nuxt/BH4sU5EC.js"
  },
  "/_nuxt/BIn7FXgu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a0b-dZwco9i5O/C3rd5tg6yJf1csYJw\"",
    "mtime": "2025-11-21T09:53:23.936Z",
    "size": 2571,
    "path": "../../.output/public/_nuxt/BIn7FXgu.js"
  },
  "/_nuxt/BL2VZBoy.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"234-PHjH6NjEfwPtvQsbT7bEw9w9G7k\"",
    "mtime": "2025-11-21T09:53:23.936Z",
    "size": 564,
    "path": "../../.output/public/_nuxt/BL2VZBoy.js"
  },
  "/_nuxt/BLqpxtBP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2a3d9-gSU5w7gp3f1uEeJJQEayUotXq2s\"",
    "mtime": "2025-11-21T09:53:23.937Z",
    "size": 173017,
    "path": "../../.output/public/_nuxt/BLqpxtBP.js"
  },
  "/_nuxt/BQgDJuww.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"496-GJU3unW9VbTjT3/7gFrAk4ny8qQ\"",
    "mtime": "2025-11-21T09:53:23.936Z",
    "size": 1174,
    "path": "../../.output/public/_nuxt/BQgDJuww.js"
  },
  "/_nuxt/BXFeLY7x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c18-HwIqrcZDW/lIbU8v72h2vsWU+jw\"",
    "mtime": "2025-11-21T09:53:23.936Z",
    "size": 3096,
    "path": "../../.output/public/_nuxt/BXFeLY7x.js"
  },
  "/_nuxt/BYPxFd3C.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"44f6-yjICZ4b4a9igpN3RFk+J8Jy5zAI\"",
    "mtime": "2025-11-21T09:53:23.936Z",
    "size": 17654,
    "path": "../../.output/public/_nuxt/BYPxFd3C.js"
  },
  "/_nuxt/BYdthqdx.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"230-R0B/8xncvi2cyuLS4/6zgMctqWY\"",
    "mtime": "2025-11-21T09:53:23.937Z",
    "size": 560,
    "path": "../../.output/public/_nuxt/BYdthqdx.js"
  },
  "/_nuxt/BZAAgqJQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a0b-p/ocxrbKGOGWTy2Ya8RVGh93xRk\"",
    "mtime": "2025-11-21T09:53:23.937Z",
    "size": 2571,
    "path": "../../.output/public/_nuxt/BZAAgqJQ.js"
  },
  "/_nuxt/Bbk2Rt96.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e5-j5R0Mux+V5wjlfrU/XatzqGTZMo\"",
    "mtime": "2025-11-21T09:53:23.937Z",
    "size": 485,
    "path": "../../.output/public/_nuxt/Bbk2Rt96.js"
  },
  "/_nuxt/BcGC6s6D.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"478-gdSocfy22ilzLAaJx+aLYzfnE+o\"",
    "mtime": "2025-11-21T09:53:23.937Z",
    "size": 1144,
    "path": "../../.output/public/_nuxt/BcGC6s6D.js"
  },
  "/_nuxt/Bf9iuFdd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"78a1-VjdYfVxSnXmoqnhlGRKhhn0aZs0\"",
    "mtime": "2025-11-21T09:53:23.938Z",
    "size": 30881,
    "path": "../../.output/public/_nuxt/Bf9iuFdd.js"
  },
  "/_nuxt/BfId7c46.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"59c-oC7m93JTx+EAlSEJEu3QpRPJt/8\"",
    "mtime": "2025-11-21T09:53:23.937Z",
    "size": 1436,
    "path": "../../.output/public/_nuxt/BfId7c46.js"
  },
  "/_nuxt/BgD34Oz4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"456-umSD9/QE5l3laVnHWdl7w45tzec\"",
    "mtime": "2025-11-21T09:53:23.937Z",
    "size": 1110,
    "path": "../../.output/public/_nuxt/BgD34Oz4.js"
  },
  "/_nuxt/BgWnEyHr.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9da-Sqdv3th2L06amYzVnDK6rxyIaMk\"",
    "mtime": "2025-11-21T09:53:23.938Z",
    "size": 2522,
    "path": "../../.output/public/_nuxt/BgWnEyHr.js"
  },
  "/_nuxt/BiXL1Myz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8c3-1ToClL66WGUR6qbkLpyo5v/jurY\"",
    "mtime": "2025-11-21T09:53:23.938Z",
    "size": 2243,
    "path": "../../.output/public/_nuxt/BiXL1Myz.js"
  },
  "/_nuxt/BiwYk5v-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23e-sheDXZQgdcgXGLHgPfkx60NLKxQ\"",
    "mtime": "2025-11-21T09:53:23.938Z",
    "size": 574,
    "path": "../../.output/public/_nuxt/BiwYk5v-.js"
  },
  "/_nuxt/BkvA9rvv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d8-9FJCb8x3gerAz9yNOb0508wHE1k\"",
    "mtime": "2025-11-21T09:53:23.938Z",
    "size": 1496,
    "path": "../../.output/public/_nuxt/BkvA9rvv.js"
  },
  "/_nuxt/BndsZ0pC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"36f-Lxqxee4Xgjgf9WEqPxYLroX3VLc\"",
    "mtime": "2025-11-21T09:53:23.938Z",
    "size": 879,
    "path": "../../.output/public/_nuxt/BndsZ0pC.js"
  },
  "/_nuxt/BoSOLbKK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4be-iTz6On133St+Ih8V+T9mOuJa5EE\"",
    "mtime": "2025-11-21T09:53:23.938Z",
    "size": 1214,
    "path": "../../.output/public/_nuxt/BoSOLbKK.js"
  },
  "/_nuxt/BoT9f5aO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3db-LrABEhpNq5F0VIwwLsj1ZEgLsxI\"",
    "mtime": "2025-11-21T09:53:23.938Z",
    "size": 987,
    "path": "../../.output/public/_nuxt/BoT9f5aO.js"
  },
  "/_nuxt/BqACKYKw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17c047-wRqIWaV9AKJhzdVdS97ffzBWO3U\"",
    "mtime": "2025-11-21T09:53:23.942Z",
    "size": 1556551,
    "path": "../../.output/public/_nuxt/BqACKYKw.js"
  },
  "/_nuxt/Br4_VEbT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"192b-D9sny1HombsYAA9Xcf2XgxRkGs8\"",
    "mtime": "2025-11-21T09:53:23.939Z",
    "size": 6443,
    "path": "../../.output/public/_nuxt/Br4_VEbT.js"
  },
  "/_nuxt/BsXUFWI5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"548b-Fh59Y3pXIlylWMxl4l08dIAplTU\"",
    "mtime": "2025-11-21T09:53:23.939Z",
    "size": 21643,
    "path": "../../.output/public/_nuxt/BsXUFWI5.js"
  },
  "/_nuxt/Bt0p_MMa.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"225-b/3Ls8ZLlnTIsomg2tFKoceB6JI\"",
    "mtime": "2025-11-21T09:53:23.939Z",
    "size": 549,
    "path": "../../.output/public/_nuxt/Bt0p_MMa.js"
  },
  "/_nuxt/BuzMYiJB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17c-F2oKnnk/o2CTJFqh7w/YfTa3JZA\"",
    "mtime": "2025-11-21T09:53:23.939Z",
    "size": 380,
    "path": "../../.output/public/_nuxt/BuzMYiJB.js"
  },
  "/_nuxt/BvHKyEFg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2eb-cIy801pzYEG1PIo0x+zgGvitTjA\"",
    "mtime": "2025-11-21T09:53:23.939Z",
    "size": 747,
    "path": "../../.output/public/_nuxt/BvHKyEFg.js"
  },
  "/_nuxt/BxgpGvH4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3e4-B6bEoFakG/fWvXpA1AUZHb/KcAo\"",
    "mtime": "2025-11-21T09:53:23.939Z",
    "size": 996,
    "path": "../../.output/public/_nuxt/BxgpGvH4.js"
  },
  "/_nuxt/C2ioQq8y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"700e-j7cCLVHjoRlKJsidkOp2Y1uw4ag\"",
    "mtime": "2025-11-21T09:53:23.940Z",
    "size": 28686,
    "path": "../../.output/public/_nuxt/C2ioQq8y.js"
  },
  "/_nuxt/C44XKz1d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1576-TbJ9Q1RpP8PjWgxz7s0MRy8l4FY\"",
    "mtime": "2025-11-21T09:53:23.940Z",
    "size": 5494,
    "path": "../../.output/public/_nuxt/C44XKz1d.js"
  },
  "/_nuxt/C6UJIyST.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"38ab-NCrxHMRqnBnHCGkvfJXEI1d+m8I\"",
    "mtime": "2025-11-21T09:53:23.940Z",
    "size": 14507,
    "path": "../../.output/public/_nuxt/C6UJIyST.js"
  },
  "/_nuxt/C7Qv54Es.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"41-4YGs/SoVv2tVruV7JGaU1ORHtrs\"",
    "mtime": "2025-11-21T09:53:23.940Z",
    "size": 65,
    "path": "../../.output/public/_nuxt/C7Qv54Es.js"
  },
  "/_nuxt/C81Zf14G.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"455-H9911Wo+ywmqxxmTITUJD8CaPxA\"",
    "mtime": "2025-11-21T09:53:23.940Z",
    "size": 1109,
    "path": "../../.output/public/_nuxt/C81Zf14G.js"
  },
  "/_nuxt/CBMrxNpD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"292-pSSWlVzR2HOQ0VEzVNkr+vNl+Bo\"",
    "mtime": "2025-11-21T09:53:23.941Z",
    "size": 658,
    "path": "../../.output/public/_nuxt/CBMrxNpD.js"
  },
  "/_nuxt/CCiuKp_a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"e26-QnpkwHN8+INJoVZH+w4QYjsViis\"",
    "mtime": "2025-11-21T09:53:23.941Z",
    "size": 3622,
    "path": "../../.output/public/_nuxt/CCiuKp_a.js"
  },
  "/_nuxt/CFP5c3tL.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b50-n9MigrqVdkIluiyE9vz2Hl8AF7E\"",
    "mtime": "2025-11-21T09:53:23.941Z",
    "size": 2896,
    "path": "../../.output/public/_nuxt/CFP5c3tL.js"
  },
  "/_nuxt/CFdtv4xn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a2-6oTugTJoAyr8QA+G1ShjEAz/jPQ\"",
    "mtime": "2025-11-21T09:53:23.941Z",
    "size": 418,
    "path": "../../.output/public/_nuxt/CFdtv4xn.js"
  },
  "/_nuxt/CGqKcKg-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1dd-b4aSH1tTb9hzkGYCNCK2K1HP8+c\"",
    "mtime": "2025-11-21T09:53:23.941Z",
    "size": 477,
    "path": "../../.output/public/_nuxt/CGqKcKg-.js"
  },
  "/_nuxt/CHjiTo6l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"662-4wziz+gK9ezO/TV7OLvbMw7KVf0\"",
    "mtime": "2025-11-21T09:53:23.941Z",
    "size": 1634,
    "path": "../../.output/public/_nuxt/CHjiTo6l.js"
  },
  "/_nuxt/CI50S1lP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4a2-p36plwc1kWoV/2n1H1bAtpOOChQ\"",
    "mtime": "2025-11-21T09:53:23.941Z",
    "size": 1186,
    "path": "../../.output/public/_nuxt/CI50S1lP.js"
  },
  "/_nuxt/CJPGQm6e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c27-KUR+ssud5m5uY1Co1jYCKld87Ps\"",
    "mtime": "2025-11-21T09:53:23.942Z",
    "size": 7207,
    "path": "../../.output/public/_nuxt/CJPGQm6e.js"
  },
  "/_nuxt/CL3OKBOG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ac-pjRFMuIVmcllB71hrSERdf+uhCY\"",
    "mtime": "2025-11-21T09:53:23.942Z",
    "size": 684,
    "path": "../../.output/public/_nuxt/CL3OKBOG.js"
  },
  "/_nuxt/CMRbKvfZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ad-RyzssDzW+pmXG+icHJ0/dv16Nm8\"",
    "mtime": "2025-11-21T09:53:23.942Z",
    "size": 685,
    "path": "../../.output/public/_nuxt/CMRbKvfZ.js"
  },
  "/_nuxt/CNK4AOrg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7b8f-SAABFn+VPotnYl2fOCNnk0lKnSs\"",
    "mtime": "2025-11-21T09:53:23.942Z",
    "size": 31631,
    "path": "../../.output/public/_nuxt/CNK4AOrg.js"
  },
  "/_nuxt/CPYRf6CO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"b839-B88JD+1of14jSOqfbHnM4YxAboA\"",
    "mtime": "2025-11-21T09:53:23.942Z",
    "size": 47161,
    "path": "../../.output/public/_nuxt/CPYRf6CO.js"
  },
  "/_nuxt/CR3i3-2_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"617-/XtwljBTq5QiqyeBssElsrtXFQ4\"",
    "mtime": "2025-11-21T09:53:23.943Z",
    "size": 1559,
    "path": "../../.output/public/_nuxt/CR3i3-2_.js"
  },
  "/_nuxt/CTvnAGSD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"49a-5GC3EEtf31blC9Jv59spiSWkwCE\"",
    "mtime": "2025-11-21T09:53:23.944Z",
    "size": 1178,
    "path": "../../.output/public/_nuxt/CTvnAGSD.js"
  },
  "/_nuxt/CUHJKaas.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"113-PypKUSGCfzJlJL216LikwYn0vj4\"",
    "mtime": "2025-11-21T09:53:23.944Z",
    "size": 275,
    "path": "../../.output/public/_nuxt/CUHJKaas.js"
  },
  "/_nuxt/CUiKheE-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"70b7-yBDq1AnccNZZNsDZ0IVsa68cx9U\"",
    "mtime": "2025-11-21T09:53:23.943Z",
    "size": 28855,
    "path": "../../.output/public/_nuxt/CUiKheE-.js"
  },
  "/_nuxt/CX2-A3J8.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"fc8-CnUGEoT36aCcaB91oVcMIMLCLmQ\"",
    "mtime": "2025-11-21T09:53:23.944Z",
    "size": 4040,
    "path": "../../.output/public/_nuxt/CX2-A3J8.js"
  },
  "/_nuxt/CXTV7wvo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"107-LsqMnC27dERN/RFlNW58pv0dGRw\"",
    "mtime": "2025-11-21T09:53:23.944Z",
    "size": 263,
    "path": "../../.output/public/_nuxt/CXTV7wvo.js"
  },
  "/_nuxt/CaRtpF6T.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c29-OQwvFyaYISftbE1twL1b3NfYfG0\"",
    "mtime": "2025-11-21T09:53:23.944Z",
    "size": 7209,
    "path": "../../.output/public/_nuxt/CaRtpF6T.js"
  },
  "/_nuxt/CbthURU1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b16-AOLwnz68mS7gbjFc7e76rujuK+o\"",
    "mtime": "2025-11-21T09:53:23.944Z",
    "size": 11030,
    "path": "../../.output/public/_nuxt/CbthURU1.js"
  },
  "/_nuxt/Cd0RcqpA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ef-sa6D9tsgp9aLxq4QidgsTKGPbvM\"",
    "mtime": "2025-11-21T09:53:23.945Z",
    "size": 239,
    "path": "../../.output/public/_nuxt/Cd0RcqpA.js"
  },
  "/_nuxt/CdyUX1yU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"974d-Cl6RBS0vvftv6AI/WlexqxUI6Oc\"",
    "mtime": "2025-11-21T09:53:23.945Z",
    "size": 38733,
    "path": "../../.output/public/_nuxt/CdyUX1yU.js"
  },
  "/_nuxt/CeTucoG5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10fe-sQmTlSrezHEhrzbkXZx2SjkFnz4\"",
    "mtime": "2025-11-21T09:53:23.945Z",
    "size": 4350,
    "path": "../../.output/public/_nuxt/CeTucoG5.js"
  },
  "/_nuxt/Cejv_Vlt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39094-MMakl6jWs6GN6GKGXtYJkNgm9pI\"",
    "mtime": "2025-11-21T09:53:23.946Z",
    "size": 233620,
    "path": "../../.output/public/_nuxt/Cejv_Vlt.js"
  },
  "/_nuxt/CigPq3WD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c5dd-SI2k4oOCigrbU2C5K6aYTdQATqM\"",
    "mtime": "2025-11-21T09:53:23.945Z",
    "size": 50653,
    "path": "../../.output/public/_nuxt/CigPq3WD.js"
  },
  "/_nuxt/ClytJu1B.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"598-SQLvcgUSd3zSU3qPj0sCF3OCC9w\"",
    "mtime": "2025-11-21T09:53:23.945Z",
    "size": 1432,
    "path": "../../.output/public/_nuxt/ClytJu1B.js"
  },
  "/_nuxt/Cm1mjpfd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6a1-F3CJoLxZTbCFrXS/dAU/bb3o2wg\"",
    "mtime": "2025-11-21T09:53:23.945Z",
    "size": 1697,
    "path": "../../.output/public/_nuxt/Cm1mjpfd.js"
  },
  "/_nuxt/CmHUuTaZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ed5-BoShBK7UK1hAqu3nWCceWVL2Zt0\"",
    "mtime": "2025-11-21T09:53:23.946Z",
    "size": 3797,
    "path": "../../.output/public/_nuxt/CmHUuTaZ.js"
  },
  "/_nuxt/Co5y6Lg_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"504-VR84RkysjugUyDaE51pY8fLS1tw\"",
    "mtime": "2025-11-21T09:53:23.946Z",
    "size": 1284,
    "path": "../../.output/public/_nuxt/Co5y6Lg_.js"
  },
  "/_nuxt/Co7jFVce.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7cf-/in9UTCYEwTEUPdD9sf+E3EqMvE\"",
    "mtime": "2025-11-21T09:53:23.946Z",
    "size": 1999,
    "path": "../../.output/public/_nuxt/Co7jFVce.js"
  },
  "/_nuxt/CohZIaU4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1871-ZWoVjVXYIqsdwAz2gNZtwBVIybI\"",
    "mtime": "2025-11-21T09:53:23.946Z",
    "size": 6257,
    "path": "../../.output/public/_nuxt/CohZIaU4.js"
  },
  "/_nuxt/CpB0YzUV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1638-yguXYx4Smz3/5pMUswCsnFlqZoE\"",
    "mtime": "2025-11-21T09:53:23.947Z",
    "size": 5688,
    "path": "../../.output/public/_nuxt/CpB0YzUV.js"
  },
  "/_nuxt/CrGFZmb6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2e8-YeKvtbeyn4xpCAxBKpdphLE31J8\"",
    "mtime": "2025-11-21T09:53:23.946Z",
    "size": 744,
    "path": "../../.output/public/_nuxt/CrGFZmb6.js"
  },
  "/_nuxt/CrIyovLo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"834-nYtABNyoevDCUMKE8mlrJ1qbFts\"",
    "mtime": "2025-11-21T09:53:23.947Z",
    "size": 2100,
    "path": "../../.output/public/_nuxt/CrIyovLo.js"
  },
  "/_nuxt/CrjLgMmi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"39a-YEPN/Uo6C/ZroCLpxlpbR+h8W1U\"",
    "mtime": "2025-11-21T09:53:23.947Z",
    "size": 922,
    "path": "../../.output/public/_nuxt/CrjLgMmi.js"
  },
  "/_nuxt/Cvit7Rwd.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a18-+mdCvSeDx/MUiWyIquaLLa6qkmQ\"",
    "mtime": "2025-11-21T09:53:23.947Z",
    "size": 2584,
    "path": "../../.output/public/_nuxt/Cvit7Rwd.js"
  },
  "/_nuxt/Cy1GOJZA.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6e4d-lrO4gv//5pF6U1z9iN1n6DzoV4g\"",
    "mtime": "2025-11-21T09:53:23.947Z",
    "size": 28237,
    "path": "../../.output/public/_nuxt/Cy1GOJZA.js"
  },
  "/_nuxt/D-GrLh2N.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"188-Xc9L4tlCCdR6RrhEUGvy7RqkWAE\"",
    "mtime": "2025-11-21T09:53:23.947Z",
    "size": 392,
    "path": "../../.output/public/_nuxt/D-GrLh2N.js"
  },
  "/_nuxt/D-uIL9R4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"964-6qlcuxNgLbx3LelPwea/MNYQSkg\"",
    "mtime": "2025-11-21T09:53:23.947Z",
    "size": 2404,
    "path": "../../.output/public/_nuxt/D-uIL9R4.js"
  },
  "/_nuxt/D0oUCiTz.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"582-jDW+piNKVF+6FR42kf9N3NbsEgc\"",
    "mtime": "2025-11-21T09:53:23.947Z",
    "size": 1410,
    "path": "../../.output/public/_nuxt/D0oUCiTz.js"
  },
  "/_nuxt/D0vjJ9Sl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17b-xe9BZeJ2tFUq9Bf6TryTHh6m5CM\"",
    "mtime": "2025-11-21T09:53:23.948Z",
    "size": 379,
    "path": "../../.output/public/_nuxt/D0vjJ9Sl.js"
  },
  "/_nuxt/D1LAmUvv.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"10dd-Jxp5qoB4O94Bu5B+9xFEG2nUQX4\"",
    "mtime": "2025-11-21T09:53:23.947Z",
    "size": 4317,
    "path": "../../.output/public/_nuxt/D1LAmUvv.js"
  },
  "/_nuxt/D1Ob5J6H.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20f-QzsZfLy+TJYEq6c5F0vqRWIjt5Q\"",
    "mtime": "2025-11-21T09:53:23.948Z",
    "size": 527,
    "path": "../../.output/public/_nuxt/D1Ob5J6H.js"
  },
  "/_nuxt/D1m4Z2XG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ba25-LM7bYP+z0rZWTV+5nnhsCZtbOj8\"",
    "mtime": "2025-11-21T09:53:23.948Z",
    "size": 244261,
    "path": "../../.output/public/_nuxt/D1m4Z2XG.js"
  },
  "/_nuxt/D3qyTeKh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3329-0SnsoGEeMn+Sf10ykJPrbt4TzUs\"",
    "mtime": "2025-11-21T09:53:23.948Z",
    "size": 13097,
    "path": "../../.output/public/_nuxt/D3qyTeKh.js"
  },
  "/_nuxt/D4OixNCY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"307-Y/qf4YBYPQOuwlfDotMXYpsA/fs\"",
    "mtime": "2025-11-21T09:53:23.948Z",
    "size": 775,
    "path": "../../.output/public/_nuxt/D4OixNCY.js"
  },
  "/_nuxt/D4WHiZ3d.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1716-VC3qiPt07nVscWSc0ZBLswNsPqE\"",
    "mtime": "2025-11-21T09:53:23.948Z",
    "size": 5910,
    "path": "../../.output/public/_nuxt/D4WHiZ3d.js"
  },
  "/_nuxt/DAqvZiBK.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ae-fHV2TVIBwIEVZXlwQZs+n4jr4BI\"",
    "mtime": "2025-11-21T09:53:23.949Z",
    "size": 430,
    "path": "../../.output/public/_nuxt/DAqvZiBK.js"
  },
  "/_nuxt/DBiaI9cs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d7e0-d48PAuv7LuklSMufZH2bXwjWTZc\"",
    "mtime": "2025-11-21T09:53:23.949Z",
    "size": 55264,
    "path": "../../.output/public/_nuxt/DBiaI9cs.js"
  },
  "/_nuxt/DByCwmQo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5ac-Eg6RgUiiBceIfGUaeg0Dmuuq5vk\"",
    "mtime": "2025-11-21T09:53:23.949Z",
    "size": 1452,
    "path": "../../.output/public/_nuxt/DByCwmQo.js"
  },
  "/_nuxt/DCciz4xf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"297f-K21XE7rHRzRAKGZ2gu/fGDUWBEI\"",
    "mtime": "2025-11-21T09:53:23.950Z",
    "size": 10623,
    "path": "../../.output/public/_nuxt/DCciz4xf.js"
  },
  "/_nuxt/DE1B9N49.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"27f5-Iuu9LGP2Yw3Xhyp1gokPa03xW+s\"",
    "mtime": "2025-11-21T09:53:23.950Z",
    "size": 10229,
    "path": "../../.output/public/_nuxt/DE1B9N49.js"
  },
  "/_nuxt/DIn8CNX7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3810-QBQDl2qUsxqlCzT+SyWY6OGGJ1U\"",
    "mtime": "2025-11-21T09:53:23.950Z",
    "size": 14352,
    "path": "../../.output/public/_nuxt/DIn8CNX7.js"
  },
  "/_nuxt/DJFP4APh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c6-B5dytv18d7Lw3u25TbPsXPy2GcM\"",
    "mtime": "2025-11-21T09:53:23.950Z",
    "size": 454,
    "path": "../../.output/public/_nuxt/DJFP4APh.js"
  },
  "/_nuxt/DMVJ8XfO.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9b-PfF59sfpExJZ+X6n0GLPuTm0+aY\"",
    "mtime": "2025-11-21T09:53:23.950Z",
    "size": 155,
    "path": "../../.output/public/_nuxt/DMVJ8XfO.js"
  },
  "/_nuxt/DRHY8nG-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"9b-3NvZablTk9Gx6S6kpyi5qPtr4tI\"",
    "mtime": "2025-11-21T09:53:23.951Z",
    "size": 155,
    "path": "../../.output/public/_nuxt/DRHY8nG-.js"
  },
  "/_nuxt/DRL3ImuF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"334-DUChP+AuI6k6hJfyNZS5FO+EMkA\"",
    "mtime": "2025-11-21T09:53:23.950Z",
    "size": 820,
    "path": "../../.output/public/_nuxt/DRL3ImuF.js"
  },
  "/_nuxt/DTAYLsTZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6cf-/7JeqSo9S9nn4s3NTLaacPuF7ic\"",
    "mtime": "2025-11-21T09:53:23.951Z",
    "size": 1743,
    "path": "../../.output/public/_nuxt/DTAYLsTZ.js"
  },
  "/_nuxt/DTcjRPMt.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5a9-P5qMHsiCYMAUzd9XMcUg00XnMUQ\"",
    "mtime": "2025-11-21T09:53:23.951Z",
    "size": 1449,
    "path": "../../.output/public/_nuxt/DTcjRPMt.js"
  },
  "/_nuxt/D_nYlboR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"734b-Bvm5nw63WuFaWzockMndoKFyNPI\"",
    "mtime": "2025-11-21T09:53:23.951Z",
    "size": 29515,
    "path": "../../.output/public/_nuxt/D_nYlboR.js"
  },
  "/_nuxt/DaB869ME.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5d3-gXthSSTNdnssNi3wBJfX5qvHqk8\"",
    "mtime": "2025-11-21T09:53:23.951Z",
    "size": 1491,
    "path": "../../.output/public/_nuxt/DaB869ME.js"
  },
  "/_nuxt/DbCEzKbP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6c3-Oz+18AKzyVGcRh+D0vKQLKSkppY\"",
    "mtime": "2025-11-21T09:53:23.951Z",
    "size": 1731,
    "path": "../../.output/public/_nuxt/DbCEzKbP.js"
  },
  "/_nuxt/DfM8Jnjg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d587-T/qLZ79Au83xGDGoaRkgHNF1u8A\"",
    "mtime": "2025-11-21T09:53:23.951Z",
    "size": 54663,
    "path": "../../.output/public/_nuxt/DfM8Jnjg.js"
  },
  "/_nuxt/DhalXwNB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"d63-Nd7a5nLU9jTh/G2+M/8WKUjTQf4\"",
    "mtime": "2025-11-21T09:53:23.951Z",
    "size": 3427,
    "path": "../../.output/public/_nuxt/DhalXwNB.js"
  },
  "/_nuxt/Dhoh5lwP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7da-jbpTXYUl1zn2ek8vBJuyZKnWd24\"",
    "mtime": "2025-11-21T09:53:23.951Z",
    "size": 2010,
    "path": "../../.output/public/_nuxt/Dhoh5lwP.js"
  },
  "/_nuxt/DiwHrE4y.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ab-OxDo/Nwygr6ubqwxv6l3Ycb5U10\"",
    "mtime": "2025-11-21T09:53:23.951Z",
    "size": 939,
    "path": "../../.output/public/_nuxt/DiwHrE4y.js"
  },
  "/_nuxt/Dj70KXC4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d6-OOklSw8FMdYCTY6lG6Om0nto/qA\"",
    "mtime": "2025-11-21T09:53:23.952Z",
    "size": 470,
    "path": "../../.output/public/_nuxt/Dj70KXC4.js"
  },
  "/_nuxt/DjDVviLZ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"961-a5wwksXD3JJ/7PRI2HlfQqoKwFE\"",
    "mtime": "2025-11-21T09:53:23.952Z",
    "size": 2401,
    "path": "../../.output/public/_nuxt/DjDVviLZ.js"
  },
  "/_nuxt/DjOLoqGw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"232-iHCnyjHJXpdLSEH0+cAtFC+lR3s\"",
    "mtime": "2025-11-21T09:53:23.952Z",
    "size": 562,
    "path": "../../.output/public/_nuxt/DjOLoqGw.js"
  },
  "/_nuxt/DlAUqK2U.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2025-11-21T09:53:23.952Z",
    "size": 91,
    "path": "../../.output/public/_nuxt/DlAUqK2U.js"
  },
  "/_nuxt/Dm6cAkds.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ad-2/IR5iQRzhVN/PiRiRiGzQpNnCo\"",
    "mtime": "2025-11-21T09:53:23.952Z",
    "size": 429,
    "path": "../../.output/public/_nuxt/Dm6cAkds.js"
  },
  "/_nuxt/DmWAW4_1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"58c-Rwh6fZlQWOiNEYTDZLUN3aQrppA\"",
    "mtime": "2025-11-21T09:53:23.952Z",
    "size": 1420,
    "path": "../../.output/public/_nuxt/DmWAW4_1.js"
  },
  "/_nuxt/Dmg8YACJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5b-uGtDfrpNBj3gcxIlrECC6opnRaU\"",
    "mtime": "2025-11-21T09:53:23.952Z",
    "size": 91,
    "path": "../../.output/public/_nuxt/Dmg8YACJ.js"
  },
  "/_nuxt/DmvYx88f.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1295-bwp/YeTyF56rT3xbACcpPjIqw8A\"",
    "mtime": "2025-11-21T09:53:23.952Z",
    "size": 4757,
    "path": "../../.output/public/_nuxt/DmvYx88f.js"
  },
  "/_nuxt/DpLUDbId.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2918-QcQrmC0OoTO6SF3EC+z+PTNO2FQ\"",
    "mtime": "2025-11-21T09:53:23.952Z",
    "size": 10520,
    "path": "../../.output/public/_nuxt/DpLUDbId.js"
  },
  "/_nuxt/Dq3RB61K.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"52e1-LNa7692E+y/IgqWusjqCmTweAoA\"",
    "mtime": "2025-11-21T09:53:23.953Z",
    "size": 21217,
    "path": "../../.output/public/_nuxt/Dq3RB61K.js"
  },
  "/_nuxt/DtrbYgQu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"364-GXagF6wxIvp+oSwddj+3cGCojrU\"",
    "mtime": "2025-11-21T09:53:23.953Z",
    "size": 868,
    "path": "../../.output/public/_nuxt/DtrbYgQu.js"
  },
  "/_nuxt/Du2tEodb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1c09-8fajRrvAZfg80LA3+nI0xi6ugE4\"",
    "mtime": "2025-11-21T09:53:23.953Z",
    "size": 7177,
    "path": "../../.output/public/_nuxt/Du2tEodb.js"
  },
  "/_nuxt/Dv57VTr3.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1208-8Lj1KNVupxTDloeKwFVN7LDpYR0\"",
    "mtime": "2025-11-21T09:53:23.953Z",
    "size": 4616,
    "path": "../../.output/public/_nuxt/Dv57VTr3.js"
  },
  "/_nuxt/DvEQJb1W.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"333-RIMO18tqi5bDFFFh3jGSnip7veg\"",
    "mtime": "2025-11-21T09:53:23.953Z",
    "size": 819,
    "path": "../../.output/public/_nuxt/DvEQJb1W.js"
  },
  "/_nuxt/DwpHxsUB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4987-qG4e9zPhTyfxzC19XBTJwbsmXsE\"",
    "mtime": "2025-11-21T09:53:23.953Z",
    "size": 18823,
    "path": "../../.output/public/_nuxt/DwpHxsUB.js"
  },
  "/_nuxt/Dwpi8Yot.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17c-vXy5F7Cf7Hi7S4OoPjOsIRNF9ig\"",
    "mtime": "2025-11-21T09:53:23.953Z",
    "size": 380,
    "path": "../../.output/public/_nuxt/Dwpi8Yot.js"
  },
  "/_nuxt/DxB25h8r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"179-lRfxXp7wbP/xcUXj9TDQuXw3QXQ\"",
    "mtime": "2025-11-21T09:53:23.954Z",
    "size": 377,
    "path": "../../.output/public/_nuxt/DxB25h8r.js"
  },
  "/_nuxt/DxQh5ImV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a5-O08w7Rjla7vPDAsLzYxGj6YIh5c\"",
    "mtime": "2025-11-21T09:53:23.954Z",
    "size": 421,
    "path": "../../.output/public/_nuxt/DxQh5ImV.js"
  },
  "/_nuxt/DxvyqeoR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3e45-izVt+mbLGmhiQmoAlCiE9NHwf0w\"",
    "mtime": "2025-11-21T09:53:23.954Z",
    "size": 15941,
    "path": "../../.output/public/_nuxt/DxvyqeoR.js"
  },
  "/_nuxt/DypZ4yJi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"46e-GxCqYWG1YOT/ZOaONLxvV/Wh0ps\"",
    "mtime": "2025-11-21T09:53:23.954Z",
    "size": 1134,
    "path": "../../.output/public/_nuxt/DypZ4yJi.js"
  },
  "/_nuxt/DznthQyX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2ed-973vu/sgT0thzz5yjkLcaEhrVos\"",
    "mtime": "2025-11-21T09:53:23.954Z",
    "size": 749,
    "path": "../../.output/public/_nuxt/DznthQyX.js"
  },
  "/_nuxt/GByAiexX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2165-kSVeptJuwH6TtQr9pz54BPkmOn0\"",
    "mtime": "2025-11-21T09:53:23.954Z",
    "size": 8549,
    "path": "../../.output/public/_nuxt/GByAiexX.js"
  },
  "/_nuxt/Icon.DlTts4Fd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"43-5Uom3aokUJYiRMTfQx0OPoBaxqs\"",
    "mtime": "2025-11-21T09:53:23.954Z",
    "size": 67,
    "path": "../../.output/public/_nuxt/Icon.DlTts4Fd.css"
  },
  "/_nuxt/JeMB2mxP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c0-5Uu/hZ2vV1a86IM1tBSx2pvyioo\"",
    "mtime": "2025-11-21T09:53:23.955Z",
    "size": 192,
    "path": "../../.output/public/_nuxt/JeMB2mxP.js"
  },
  "/_nuxt/K1QTFBCJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"474-LWzkWgRiXwCdiq3An50CZLcxyjY\"",
    "mtime": "2025-11-21T09:53:23.955Z",
    "size": 1140,
    "path": "../../.output/public/_nuxt/K1QTFBCJ.js"
  },
  "/_nuxt/LJjAGViG.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4dc-rmYlFtcXZ+hetZLb4BvLjXk9qnI\"",
    "mtime": "2025-11-21T09:53:23.955Z",
    "size": 1244,
    "path": "../../.output/public/_nuxt/LJjAGViG.js"
  },
  "/_nuxt/M14GI17a.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fc-qzPheAiN0DgGGvs8qxdhKh6UC1k\"",
    "mtime": "2025-11-21T09:53:23.955Z",
    "size": 508,
    "path": "../../.output/public/_nuxt/M14GI17a.js"
  },
  "/_nuxt/N-IBRvSD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3ea-qVUYHbHZHi1MaO0G7wBBQrvwbCA\"",
    "mtime": "2025-11-21T09:53:23.955Z",
    "size": 1002,
    "path": "../../.output/public/_nuxt/N-IBRvSD.js"
  },
  "/_nuxt/PRu-nwta.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"206b-fDhxlFodIg7T7J5g9YdJOx1FiHc\"",
    "mtime": "2025-11-21T09:53:23.955Z",
    "size": 8299,
    "path": "../../.output/public/_nuxt/PRu-nwta.js"
  },
  "/_nuxt/PbVS3gXm.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"798-aLuhU1J1GXlWYR7bpbTJQB0h6f0\"",
    "mtime": "2025-11-21T09:53:23.955Z",
    "size": 1944,
    "path": "../../.output/public/_nuxt/PbVS3gXm.js"
  },
  "/_nuxt/U_Ptu9hE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"501-38vrhGe90qMi47SgMRZ5VoDkWGE\"",
    "mtime": "2025-11-21T09:53:23.955Z",
    "size": 1281,
    "path": "../../.output/public/_nuxt/U_Ptu9hE.js"
  },
  "/_nuxt/_5cJWlkN.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1d6-VKbeCdFiU0N+8FZdMk/FRoV9st0\"",
    "mtime": "2025-11-21T09:53:23.956Z",
    "size": 470,
    "path": "../../.output/public/_nuxt/_5cJWlkN.js"
  },
  "/_nuxt/aOGguEi-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8e3-iM7ClEn8ALY1hoYdg5uPh+0/+Tg\"",
    "mtime": "2025-11-21T09:53:23.956Z",
    "size": 2275,
    "path": "../../.output/public/_nuxt/aOGguEi-.js"
  },
  "/_nuxt/bBwRRaMY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a4b-joCfLMPblPCcSzY/iDHsTTwXKPk\"",
    "mtime": "2025-11-21T09:53:23.956Z",
    "size": 2635,
    "path": "../../.output/public/_nuxt/bBwRRaMY.js"
  },
  "/_nuxt/cdYEHJZT.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a76-TNFbBv4H7ApkEz7EOMtLdG6/R1g\"",
    "mtime": "2025-11-21T09:53:23.956Z",
    "size": 2678,
    "path": "../../.output/public/_nuxt/cdYEHJZT.js"
  },
  "/_nuxt/cpDV4tY0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"598-yQiSyCbt601CR5JNJDY15g9dFBs\"",
    "mtime": "2025-11-21T09:53:23.956Z",
    "size": 1432,
    "path": "../../.output/public/_nuxt/cpDV4tY0.js"
  },
  "/_nuxt/eTVkAmGE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"213-XsQiJ8RrAR8/ZEwcFluRtOuCRUc\"",
    "mtime": "2025-11-21T09:53:23.956Z",
    "size": 531,
    "path": "../../.output/public/_nuxt/eTVkAmGE.js"
  },
  "/_nuxt/entry.BlV8NLmW.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e1-stWEeY8LhiJeilj1S7Sg/yIyU9c\"",
    "mtime": "2025-11-21T09:53:23.956Z",
    "size": 58081,
    "path": "../../.output/public/_nuxt/entry.BlV8NLmW.css"
  },
  "/_nuxt/error-404.JekaaCis.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"de4-+wA7grMyiBYWUxUrDrQgnZGsVuQ\"",
    "mtime": "2025-11-21T09:53:23.956Z",
    "size": 3556,
    "path": "../../.output/public/_nuxt/error-404.JekaaCis.css"
  },
  "/_nuxt/error-500.CNP9nqm1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"75c-Juu+xpvMf6y/oBf0WsXvPEH0ie4\"",
    "mtime": "2025-11-21T09:53:23.956Z",
    "size": 1884,
    "path": "../../.output/public/_nuxt/error-500.CNP9nqm1.css"
  },
  "/_nuxt/gx1q_p0x.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"a87-HIfbtMAbhPOHOxMcA0amozy5C18\"",
    "mtime": "2025-11-21T09:53:23.956Z",
    "size": 2695,
    "path": "../../.output/public/_nuxt/gx1q_p0x.js"
  },
  "/_nuxt/hQMVLo0-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"18a-BlFg/OIgqZ2jTtIvJC5aefi/lSA\"",
    "mtime": "2025-11-21T09:53:23.957Z",
    "size": 394,
    "path": "../../.output/public/_nuxt/hQMVLo0-.js"
  },
  "/_nuxt/hkxZKvCX.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e3-s7XFlGOYWImjyvcUImCi0nfCk8k\"",
    "mtime": "2025-11-21T09:53:23.957Z",
    "size": 483,
    "path": "../../.output/public/_nuxt/hkxZKvCX.js"
  },
  "/_nuxt/iB-xP0jJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"163a-e5VmWxg3VsWQjB43jc6Wwwh6VyA\"",
    "mtime": "2025-11-21T09:53:23.957Z",
    "size": 5690,
    "path": "../../.output/public/_nuxt/iB-xP0jJ.js"
  },
  "/_nuxt/index.187VLAK4.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f8d-/GGbmSBhCGmZ3GMOPF5y5/Y/E6c\"",
    "mtime": "2025-11-21T09:53:23.957Z",
    "size": 3981,
    "path": "../../.output/public/_nuxt/index.187VLAK4.css"
  },
  "/_nuxt/index.BA8_PHu7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"be3-4Wy4H05SgUHkw7Kcix7Fa5B/CWg\"",
    "mtime": "2025-11-21T09:53:23.957Z",
    "size": 3043,
    "path": "../../.output/public/_nuxt/index.BA8_PHu7.css"
  },
  "/_nuxt/index.BG76CNur.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"21a-EhUqptZIHcr88+bmqMzKcNXmAtI\"",
    "mtime": "2025-11-21T09:53:23.957Z",
    "size": 538,
    "path": "../../.output/public/_nuxt/index.BG76CNur.css"
  },
  "/_nuxt/index.BJt9RYtO.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"356-WtpiMlBk8N8JB2NNiwVMW3oJ+TY\"",
    "mtime": "2025-11-21T09:53:23.957Z",
    "size": 854,
    "path": "../../.output/public/_nuxt/index.BJt9RYtO.css"
  },
  "/_nuxt/index.BUbPB1AS.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"92-hAjhsMqH/HspmhYkDTfBHtn4DcY\"",
    "mtime": "2025-11-21T09:53:23.957Z",
    "size": 146,
    "path": "../../.output/public/_nuxt/index.BUbPB1AS.css"
  },
  "/_nuxt/index.BX_UX2Z7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f90-Y36AsZ0lWbe5msZsyNvLxufdlfY\"",
    "mtime": "2025-11-21T09:53:23.957Z",
    "size": 3984,
    "path": "../../.output/public/_nuxt/index.BX_UX2Z7.css"
  },
  "/_nuxt/index.BXtIAdL6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"113b-e6bxCzeUjQQWKWgL+/k3wildp/I\"",
    "mtime": "2025-11-21T09:53:23.957Z",
    "size": 4411,
    "path": "../../.output/public/_nuxt/index.BXtIAdL6.css"
  },
  "/_nuxt/index.By8qs1q2.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"194a-NQbPLUgTCLG9HILBFJN7tZNnhK4\"",
    "mtime": "2025-11-21T09:53:23.958Z",
    "size": 6474,
    "path": "../../.output/public/_nuxt/index.By8qs1q2.css"
  },
  "/_nuxt/index.CJBot2LB.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d47-njiiSuAutGO6U8905f8A2AkG4zU\"",
    "mtime": "2025-11-21T09:53:23.958Z",
    "size": 3399,
    "path": "../../.output/public/_nuxt/index.CJBot2LB.css"
  },
  "/_nuxt/index.CjBeXiZ7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"194a-Sb5t+g/Xtg5sUYjVqx2Gg/IMk4Y\"",
    "mtime": "2025-11-21T09:53:23.958Z",
    "size": 6474,
    "path": "../../.output/public/_nuxt/index.CjBeXiZ7.css"
  },
  "/_nuxt/index.CupuIfOU.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1fc-EBq1K9bx7IsQKF17kNeKYE6LRD0\"",
    "mtime": "2025-11-21T09:53:23.958Z",
    "size": 508,
    "path": "../../.output/public/_nuxt/index.CupuIfOU.css"
  },
  "/_nuxt/index.CvRt-jlQ.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"5e5-1ZJh1agd+a1tnZo4brHdGmplEyk\"",
    "mtime": "2025-11-21T09:53:23.958Z",
    "size": 1509,
    "path": "../../.output/public/_nuxt/index.CvRt-jlQ.css"
  },
  "/_nuxt/index.DdKFiMaA.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"563-j8GOFKrIKRCg2JdJk0bKXyKgEFE\"",
    "mtime": "2025-11-21T09:53:23.958Z",
    "size": 1379,
    "path": "../../.output/public/_nuxt/index.DdKFiMaA.css"
  },
  "/_nuxt/index.IzeLxvLA.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"19bd-JWg/etrr+kT/KUoNmQNnVZT/3Gg\"",
    "mtime": "2025-11-21T09:53:23.958Z",
    "size": 6589,
    "path": "../../.output/public/_nuxt/index.IzeLxvLA.css"
  },
  "/_nuxt/index.a-6Zl4im.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"848-Eu5sVotinqSvjiINR1p2W6bvX1A\"",
    "mtime": "2025-11-21T09:53:23.958Z",
    "size": 2120,
    "path": "../../.output/public/_nuxt/index.a-6Zl4im.css"
  },
  "/_nuxt/jG-zQou1.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fbb-c25ADL90xxOBxw9aJc2piQtlW70\"",
    "mtime": "2025-11-21T09:53:23.958Z",
    "size": 8123,
    "path": "../../.output/public/_nuxt/jG-zQou1.js"
  },
  "/_nuxt/kCORkx7s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"34a-gso8MrqhE0f2tUCnnpCNPR8D49s\"",
    "mtime": "2025-11-21T09:53:23.959Z",
    "size": 842,
    "path": "../../.output/public/_nuxt/kCORkx7s.js"
  },
  "/_nuxt/kP3r9JyH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"318-nFpzlfJaSWrNPch4IUr7YojmjVU\"",
    "mtime": "2025-11-21T09:53:23.959Z",
    "size": 792,
    "path": "../../.output/public/_nuxt/kP3r9JyH.js"
  },
  "/_nuxt/kWTR6P-F.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"432-/a3uJcVlQ/OrSwfPBRKPZGObrfg\"",
    "mtime": "2025-11-21T09:53:23.959Z",
    "size": 1074,
    "path": "../../.output/public/_nuxt/kWTR6P-F.js"
  },
  "/_nuxt/kmJXdH0Q.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1113-1tcH3wYdOcA9771mjQGxtpMcaw0\"",
    "mtime": "2025-11-21T09:53:23.959Z",
    "size": 4371,
    "path": "../../.output/public/_nuxt/kmJXdH0Q.js"
  },
  "/_nuxt/kpw5tU3t.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40f-wxgq2D+a7/Ez54nj8Is66xc7Vb8\"",
    "mtime": "2025-11-21T09:53:23.959Z",
    "size": 1039,
    "path": "../../.output/public/_nuxt/kpw5tU3t.js"
  },
  "/_nuxt/l0Se-5nY.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3bbd-5paNs8vu5euJQ5/vqUAYj1L6ZGA\"",
    "mtime": "2025-11-21T09:53:23.959Z",
    "size": 15293,
    "path": "../../.output/public/_nuxt/l0Se-5nY.js"
  },
  "/_nuxt/nB7oQbLE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"52d-aODP/4hrS0br/Q0BRfVSkMZyo1s\"",
    "mtime": "2025-11-21T09:53:23.959Z",
    "size": 1325,
    "path": "../../.output/public/_nuxt/nB7oQbLE.js"
  },
  "/_nuxt/oeQZFuL4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"f90-uLv0O7N/xrMKUHGtX7HkvGcD1TE\"",
    "mtime": "2025-11-21T09:53:23.959Z",
    "size": 3984,
    "path": "../../.output/public/_nuxt/oeQZFuL4.js"
  },
  "/_nuxt/pA-L5z5-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"448f-ntZdDEsBJIlqobTsMlUeheiAOkE\"",
    "mtime": "2025-11-21T09:53:23.960Z",
    "size": 17551,
    "path": "../../.output/public/_nuxt/pA-L5z5-.js"
  },
  "/_nuxt/pRmT_l2s.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"7e2-SdIf5qMzRaHYxlc8b8SDm8Kc66A\"",
    "mtime": "2025-11-21T09:53:23.960Z",
    "size": 2018,
    "path": "../../.output/public/_nuxt/pRmT_l2s.js"
  },
  "/_nuxt/rLYoUjrC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"64f-zQaEAsOmj1/Yw6hBG2kT8zbJ2q8\"",
    "mtime": "2025-11-21T09:53:23.960Z",
    "size": 1615,
    "path": "../../.output/public/_nuxt/rLYoUjrC.js"
  },
  "/_nuxt/rx5cLQAs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"20c-nLpwu63R8MjP1U84xchitqP0VmM\"",
    "mtime": "2025-11-21T09:53:23.960Z",
    "size": 524,
    "path": "../../.output/public/_nuxt/rx5cLQAs.js"
  },
  "/_nuxt/tAzhbbzc.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2b5-lPossZpl56SaaXwEkhscYUnKrw0\"",
    "mtime": "2025-11-21T09:53:23.960Z",
    "size": 693,
    "path": "../../.output/public/_nuxt/tAzhbbzc.js"
  },
  "/_nuxt/tuqQcBbh.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4e5-iIBRJRRp+KQbzc0OoEpZO8xF43A\"",
    "mtime": "2025-11-21T09:53:23.960Z",
    "size": 1253,
    "path": "../../.output/public/_nuxt/tuqQcBbh.js"
  },
  "/_nuxt/ysAEtkcJ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ac9-2NejNxEHoOXg7zDblb0Osdb56ps\"",
    "mtime": "2025-11-21T09:53:23.960Z",
    "size": 2761,
    "path": "../../.output/public/_nuxt/ysAEtkcJ.js"
  },
  "/_nuxt/zGrFUsMF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6db6-PQxG0nvy1lwFVaV1Ho32spO3Jus\"",
    "mtime": "2025-11-21T09:53:23.961Z",
    "size": 28086,
    "path": "../../.output/public/_nuxt/zGrFUsMF.js"
  },
  "/Dashboard/Appeal/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.849Z",
    "size": 4405,
    "path": "../../.output/public/Dashboard/Appeal/index.html"
  },
  "/Dashboard/DailyClaim/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.849Z",
    "size": 4405,
    "path": "../../.output/public/Dashboard/DailyClaim/index.html"
  },
  "/Dashboard/Mint/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.845Z",
    "size": 4405,
    "path": "../../.output/public/Dashboard/Mint/index.html"
  },
  "/Dashboard/Governance/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.849Z",
    "size": 4405,
    "path": "../../.output/public/Dashboard/Governance/index.html"
  },
  "/Dashboard/Nominate/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.845Z",
    "size": 4405,
    "path": "../../.output/public/Dashboard/Nominate/index.html"
  },
  "/Dashboard/Leaderboard/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.845Z",
    "size": 4405,
    "path": "../../.output/public/Dashboard/Leaderboard/index.html"
  },
  "/Dashboard/Referral/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.845Z",
    "size": 4405,
    "path": "../../.output/public/Dashboard/Referral/index.html"
  },
  "/Dashboard/Stake/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.845Z",
    "size": 4405,
    "path": "../../.output/public/Dashboard/Stake/index.html"
  },
  "/Dashboard/Voting/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"1135-on45Ijx8bbzEVTCXmGWc2El3sWA\"",
    "mtime": "2025-11-21T09:53:23.845Z",
    "size": 4405,
    "path": "../../.output/public/Dashboard/Voting/index.html"
  },
  "/_nuxt/builds/latest.json": {
    "type": "application/json",
    "etag": "\"47-MiYBTJMKAA2wBPg1qseJkmutJWY\"",
    "mtime": "2025-11-21T09:53:23.866Z",
    "size": 71,
    "path": "../../.output/public/_nuxt/builds/latest.json"
  },
  "/_nuxt/builds/meta/28b5abc5-3ac7-430f-a65d-a4146e0624af.json": {
    "type": "application/json",
    "etag": "\"8b-hNI2yGgGCH8/NuWIYWLnRBCuM44\"",
    "mtime": "2025-11-21T09:53:23.861Z",
    "size": 139,
    "path": "../../.output/public/_nuxt/builds/meta/28b5abc5-3ac7-430f-a65d-a4146e0624af.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt/builds/meta":{"maxAge":31536000},"/_nuxt/builds":{"maxAge":1},"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

const _EjLrf1 = defineEventHandler((event) => {
  setHeader(event, "Access-Control-Allow-Origin", "*");
  setHeader(event, "Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  setHeader(event, "Access-Control-Allow-Headers", "Content-Type, Authorization");
  setHeader(event, "Access-Control-Allow-Credentials", "true");
  if (event.node.req.method === "OPTIONS") {
    event.node.res.statusCode = 200;
    event.node.res.end();
  }
});

const _lazy_YWScSZ = () => import('./routes/api/email/auth/send-welcome.post.mjs');
const _lazy_ew37dL = () => import('./_/renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '', handler: _EjLrf1, lazy: false, middleware: true, method: undefined },
  { route: '/api/email/auth/send-welcome', handler: _lazy_YWScSZ, lazy: true, middleware: false, method: "post" },
  { route: '/**', handler: _lazy_ew37dL, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter$1({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const localFetch = nitroApp.localFetch;
const closePrerenderer = () => nitroApp.hooks.callHook("close");
trapUnhandledNodeErrors();

export { useRuntimeConfig as a, useStorage as b, useAppConfig as c, closePrerenderer as d, getRouteRules as g, localFetch as l, useNitroApp as u };
//# sourceMappingURL=runtime.mjs.map
