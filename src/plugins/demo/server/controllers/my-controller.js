"use strict";

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi.plugin("demo").service("myService").getWelcomeMessage();
  },
  async hello(ctx) {
    const collections = await strapi
      .query("collection-type", "content-manager")
      .find();
    ctx.body = collections;
  },
});
