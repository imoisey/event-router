export default class Route
{
    public elem: string;
    
    public event: string;

    public handler: Handler;

    public constructor(elem: string, event: string, handler: Handler)
    {
        this.elem = elem;
        this.event = event;
        this.handler = handler;
    }
}