define("Factory/ElementFactory", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Factory/DocumentElementFactory", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class DocumentElementFactory {
        getBySelector(name) {
            var _a;
            return (_a = document.querySelector(name)) !== null && _a !== void 0 ? _a : new Element();
        }
    }
    exports.default = DocumentElementFactory;
});
define("Handlers/Handler", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("Route", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Route {
        constructor(elem, event, handler) {
            this.elem = elem;
            this.event = event;
            this.handler = handler;
        }
    }
    exports.default = Route;
});
define("EventRouter", ["require", "exports", "Route"], function (require, exports, Route_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class EventRouter {
        constructor(elementFactory) {
            this.routes = [];
            this.elementFactory = elementFactory;
        }
        addRouteFromObject(routes) {
            routes.forEach((routeItem) => {
                let handler = new window["Handlers/AlertHandler"]();
                console.log(handler);
                let route = new Route_1.default(routeItem.elem, routeItem.event, routeItem.handler);
                this.addRoute(route);
            });
        }
        addRoute(route) {
            this.routes.push(route);
        }
        resolve() {
            this.routes.forEach((route) => {
                this.elementFactory.getBySelector(route.elem).addEventListener(route.event, route.handler.handle);
            });
        }
    }
    exports.default = EventRouter;
});
define("Handlers/AlertHandler", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AlertHandler {
        handle(e) {
            alert("Hello world");
            console.log(e);
        }
    }
    exports.default = AlertHandler;
});
define("Config/Routes", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = [
        {
            elem: "#btn",
            event: "click",
            handler: "Handlers/AlertHandler"
        }
    ];
});
define("App", ["require", "exports", "Factory/DocumentElementFactory", "EventRouter", "Handlers/AlertHandler", "Route", "Config/Routes"], function (require, exports, DocumentElementFactory_1, EventRouter_1, AlertHandler_1, Route_2, Routes_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let documentElementFactory = new DocumentElementFactory_1.default();
    let eventRouter = new EventRouter_1.default(documentElementFactory);
    let alertHandler = new AlertHandler_1.default();
    let alertRoute = new Route_2.default('#btn', 'click', alertHandler);
    eventRouter.addRouteFromObject(Routes_1.default);
    eventRouter.addRoute(alertRoute);
    eventRouter.resolve();
});
