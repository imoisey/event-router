import Handler from "./Handler";

export default class AlertHandler implements Handler
{
    public handle(e: Event)
    {
        alert("Hello world");
        console.log(e);
    }
}