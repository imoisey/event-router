import ElementFactory from "./Factory/ElementFactory";
import Route from "./Route";

export default class EventRouter
{
    protected elementFactory: ElementFactory;

    protected routes: Array<Route> = [];

    public constructor(elementFactory: ElementFactory)
    {
        this.elementFactory = elementFactory;
    }

    public addRouteFromObject(routes: Array<any>)
    {
        routes.forEach((routeItem) => {
            let handler = new (<any>window)["AlertHandler"]();
            console.log(handler);

            let route = new Route(routeItem.elem, routeItem.event, routeItem.handler);
            this.addRoute(route);
        });
    }

    public addRoute(route: Route): void
    {
        this.routes.push(route);
    }

    public resolve()
    {
        this.routes.forEach((route) => {
            this.elementFactory.getBySelector(route.elem).addEventListener(route.event, route.handler.handle);
        });
    }
}