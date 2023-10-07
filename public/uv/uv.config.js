// This file overwrites the stock UV config.js

self.__uv$config = {
    prefix: "/uv/service/",
    bare: ["https://gointerstellar.app/outerspace/", "https://shuttleproxy.com/bare/", "https://geoquiz.gq/bare/", "https://tomp.app/", "https://kazwi.com/bare/", "https://kazwire.com/bare/", "https://math.kazwire.com/bare/"],
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "/uv/uv.handler.js",
    bundle: "/uv/uv.bundle.js",
    config: "/uv/uv.config.js",
    sw: "/uv/uv.sw.js",
  };
