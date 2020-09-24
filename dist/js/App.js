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
define("EventRouter", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class EventRouter {
        constructor(elementFactory) {
            this.routes = [];
            this.elementFactory = elementFactory;
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
define("App", ["require", "exports", "Factory/DocumentElementFactory", "EventRouter", "Handlers/AlertHandler", "Route"], function (require, exports, DocumentElementFactory_1, EventRouter_1, AlertHandler_1, Route_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let documentElementFactory = new DocumentElementFactory_1.default();
    let eventRouter = new EventRouter_1.default(documentElementFactory);
    let alertHandler = new AlertHandler_1.default();
    let alertRoute = new Route_1.default('#btn', 'click', alertHandler);
    eventRouter.addRoute(alertRoute);
    eventRouter.resolve();
});
