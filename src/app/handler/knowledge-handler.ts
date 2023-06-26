import { Category } from './../model/category';
import { Knowledge } from './../model/knowledge';

export class KnowledgeHandler {
  private static KNOWLEDGE_KEY: string = 'knowledge';

  static init() {
    if (KnowledgeHandler.getAll().length == 0) {
      let category = new Category(1, 'Nenhuma', 'NONE');
      let fakeData = [
        new Knowledge(1, 'Utilizar várias versões NodeJS', category, 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non recusandae hic sunt illo sequi et quibusdam ipsa, facere labore quis autem quaerat, ab earum libero', new Date()),
        new Knowledge(2, 'Geração de imagens com IA', category, 'Amet consectetur adipisicing elit. Perspiciatis non recusandae hic sunt illo sequi et quibusdam ipsa, facere labore quis autem quaerat, ab earum libero', new Date()),
        new Knowledge(3, 'Acessar senhas salvas no DBeaver', category, 'Ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non recusandae hic sunt illo sequi et quibusdam ipsa, facere labore quis autem quaerat, ab earum libero', new Date()),
        new Knowledge(4, 'Criar templates SQL', category, 'Ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis non recusandae hic sunt illo sequi et quibusdam ipsa, facere labore quis autem quaerat, ab earum libero', new Date())
      ];
      for (let knowledge of fakeData) {
        KnowledgeHandler.insert(knowledge);
      }
    }
  }

  static getAll(): Knowledge[] {
    let data = localStorage.getItem(KnowledgeHandler.KNOWLEDGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }

  static getById(id: number): Knowledge | undefined {
    let knowledges: Knowledge[] = KnowledgeHandler.getAll();
    return knowledges.find((knowledge) => knowledge.id == id);
  }

  static findMaxId(knowledges: Knowledge[]): number {
    let maxId: number = 0;
    knowledges.forEach((knowledge) => {
      if (knowledge.id > maxId) {
        maxId = knowledge.id;
      }
    });
    return maxId;
  }

  static insert(knowledge: Knowledge) {
    let knowledges: Knowledge[] = KnowledgeHandler.getAll();
    let id = KnowledgeHandler.findMaxId(knowledges);
    knowledge.id = id + 1;
    knowledges.push(knowledge);
    localStorage.setItem(
      KnowledgeHandler.KNOWLEDGE_KEY,
      JSON.stringify(knowledges)
    );
  }

  static update(knowledge: Knowledge) {
    let knowledges: Knowledge[] = KnowledgeHandler.getAll();
    knowledges = knowledges.filter((k) => k.id != knowledge.id);
    knowledges.push(knowledge);
    localStorage.setItem(
      KnowledgeHandler.KNOWLEDGE_KEY,
      JSON.stringify(knowledges)
    );
  }

  static delete(id: number) {
    let knowledges: Knowledge[] = KnowledgeHandler.getAll();
    knowledges = knowledges.filter((k) => k.id != id);
    localStorage.setItem(
      KnowledgeHandler.KNOWLEDGE_KEY,
      JSON.stringify(knowledges)
    );
  }
}
