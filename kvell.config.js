module.exports = {
  protocol: "http",
  routes: [{
    "name": "auth",
    "paath": "/api/v1/auth"
  }, {
    "name": "admin",
    "path": "/api/v1/admin"
  }],
  models: ["user", "credential", "event", "folder"],
  autoRequireRoutes: true
};