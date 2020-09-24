import Route from "./Route";

export default class EventRouter
{
    protected elementFactory: ElementFactory;

    protected routes: Array<Route> = [];

    public constructor(elementFactory: ElementFactory)
    {
        this.elementFactory = elementFactory;
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