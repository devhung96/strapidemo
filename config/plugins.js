module.exports = {
  // ...
  demo: {
    enabled: true,
    resolve: "./src/plugins/demo", // path to plugin folder
  },
  "import-export-entries": {
    enabled: true,
  },
  seo: {
    enabled: true,
  },
  "content-versioning": {
    enabled: true,
  },
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            host: "127.0.0.1",
            port: 6379,
            db: 0,
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "redis",
        options: {
          max: 32767,
          connection: "default",
        },
      },
      strategy: {
        // if you are using keyPrefix for your Redis, please add <keysPrefix>
        keysPrefix: "<redis_keyPrefix>",
        contentTypes: [
          // list of Content-Types UID to cache
        ],
      },
    },
  },
  // ...

  "traking-appversion": {
    enabled: true,
    resolve: "./src/plugins/traking-appversion",
  },
};
