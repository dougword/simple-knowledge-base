import { Category } from "../model/category";

export class CategoryFake {

    public static list: Category[] = [
        new Category(1, 'Configurações'),
        new Category(2, 'Edição de imagem'),
        new Category(3, 'Ferramentas SGBD'),
        new Category(4, 'Containers')
    ]

}