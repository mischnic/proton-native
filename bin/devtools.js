'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
var connectToDevTools = void 0,
  WebSocket = void 0;

// from jaredhanson/node-parent-require
var prequire = function prequire(id) {
  for (var parent = module.parent; parent; parent = parent.parent) {
    try {
      return parent.require(id);
    } catch (e) {}
  }
  throw new Error("Cannot find module '" + id + "' from parent");
};

if (process.env.NODE_ENV !== 'production') {
  try {
    global.window = global;
    WebSocket = prequire('ws');
    connectToDevTools = prequire('react-devtools-core').connectToDevTools;
  } catch (e) {}
}

var ws = void 0;

function connectDevtools(reconciler) {
  if (connectToDevTools && WebSocket) {
    ws = new WebSocket('ws://localhost:8097');
    connectToDevTools({ websocket: ws });
    reconciler.injectIntoDevTools({
      bundleType: 1,
      version: '0.1.0',
      rendererPackageName: 'custom-renderer',
      findHostInstanceByFiber: reconciler.findHostInstance,
    });
  }
}

function disconnectDevtools() {
  if (
    ws &&
    WebSocket &&
    (ws.readyState === WebSocket.CONNECTING || ws.readyState === WebSocket.OPEN)
  ) {
    ws.close();
  }
}

exports.connectDevtools = connectDevtools;
exports.disconnectDevtools = disconnectDevtools;
