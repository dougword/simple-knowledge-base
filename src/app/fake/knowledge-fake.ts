import { Category } from "../model/category";
import { Knowledge } from "../model/knowledge";
import { CategoryFake } from "./category-fake";

export class KnowledgeFake {

    public static list: Knowledge[] = [
        new Knowledge(1, 'Utilizar várias versões NodeJS', CategoryFake.list[0], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non recusandae hic sunt illo sequi et quibusdam ipsa, facere labore quis autem quaerat, ab earum libero', new Date()),
        new Knowledge(2, 'Geração de imagens com IA', CategoryFake.list[1], 'Amet consectetur adipisicing elit. Perspiciatis non recusandae hic sunt illo sequi et quibusdam ipsa, facere labore quis autem quaerat, ab earum libero', new Date()),
        new Knowledge(3, 'Acessar senhas salvas no DBeaver', CategoryFake.list[2], 'Ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non recusandae hic sunt illo sequi et quibusdam ipsa, facere labore quis autem quaerat, ab earum libero', new Date()),
        new Knowledge(4, 'Criar templates SQL', CategoryFake.list[2], 'Ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non recusandae hic sunt illo sequi et quibusdam ipsa, facere labore quis autem quaerat, ab earum libero', new Date())

    ]

}