import DocumentElementFactory from "./Factory/DocumentElementFactory";
import EventRouter from "./EventRouter";
import AlertHandler from "./Handlers/AlertHandler";
import Route from "./Route";
import routes from './Config/Routes';

let documentElementFactory = new DocumentElementFactory();
let eventRouter = new EventRouter(documentElementFactory);

let alertHandler = new AlertHandler();
let alertRoute = new Route('#btn', 'click', alertHandler);

eventRouter.addRouteFromObject(routes);
eventRouter.addRoute(alertRoute);

eventRouter.resolve();