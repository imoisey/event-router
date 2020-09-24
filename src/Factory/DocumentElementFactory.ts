import ElementFactory from './ElementFactory';

export default class DocumentElementFactory implements ElementFactory
{
    getBySelector(name: string) : Element
    {
        return document.querySelector(name) ?? new Element();
    }
}