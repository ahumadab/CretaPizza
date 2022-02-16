import { Category } from 'src/app/enum/category';
import { ImagePath } from 'src/app/enum/image-path';

export interface IPizza
{
    _id?: string;
    name: string;
    category: Category;
    ingredients: string[];
    price: number;
    image: ImagePath;
}

export class Pizza implements IPizza
{
    readonly _id: string;
    private _name: string;
    private _category: Category;
    private _ingredients: string[];
    private _price: number;
    private _image: ImagePath;

    constructor(id: string, name: string, category: Category, ingredients: string[], price: number, image: ImagePath)
    {
        this._id = id;
        this._name = name;
        this._category = category;
        this._ingredients = ingredients;
        this._price = price;
        this._image = image;
    }

    public get name(): string
    {
        return this._name;
    }
    public set name(value: string)
    {
        this._name = value;
    }
    public get category(): Category
    {
        return this._category;
    }
    public set category(value: Category)
    {
        this._category = value;
    }
    public get ingredients(): string[]
    {
        return this._ingredients;
    }
    public set ingredients(value: string[])
    {
        this._ingredients = value;
    }
    public get price(): number
    {
        return this._price;
    }
    public set price(value: number)
    {
        this._price = value;
    }
    public get image(): ImagePath
    {
        return this._image;
    }
    public set image(value: ImagePath)
    {
        this._image = value;
    }
}
