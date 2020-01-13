module.exports = {
  protocol: "http",
  routes: [{
    "name": "auth",
    "paath": "/api/v1/auth"
  }, {
    "name": "admin",
    "path": "/api/v1/admin"
  }, {
    "name": "event",
    "path": "/api/v1/event"
  }],
  models: ["user", "credential", "event", "folder"],
  autoRequireRoutes: false
};