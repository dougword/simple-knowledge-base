import { Category } from '../model/category';

export class CategoryHandler {
  private static CATEGORY_KEY: string = 'category';

  static init() {
    if (CategoryHandler.getAll().length == 0) {
      let fakeData = [
        new Category(0, 'Nenhuma', 'NONE'),
        new Category(0, 'Configurações', 'CFG'),
        new Category(0, 'Edição de imagem', 'IMG'),
        new Category(0, 'Ferramentas SGBD', 'SQL'),
        new Category(0, 'Containers', 'DCK'),
      ];
      for (let category of fakeData) {
        CategoryHandler.insert(category);
      }
    }
  }

  static getAll(sorted = false): Category[] {
    let data = localStorage.getItem(CategoryHandler.CATEGORY_KEY);
    if (data) {
      let categories = JSON.parse(data);
      if (sorted)
        categories = categories.sort((a: Category, b: Category) => a.id - b.id);
      return categories;
    }
    return [];
  }

  static getById(id: number): Category | undefined {
    let categories: Category[] = CategoryHandler.getAll();
    return categories.find((category) => category.id == id);
  }

  static findMaxId(categories: Category[]): number {
    let maxId: number = 0;
    categories.forEach((category) => {
      if (category.id > maxId) {
        maxId = category.id;
      }
    });
    return maxId;
  }

  static insert(category: Category) {
    let categories: Category[] = CategoryHandler.getAll();
    let id = CategoryHandler.findMaxId(categories);
    category.id = id + 1;
    categories.push(category);
    localStorage.setItem(
      CategoryHandler.CATEGORY_KEY,
      JSON.stringify(categories)
    );
  }

  static update(category: Category) {
    let categories: Category[] = CategoryHandler.getAll();
    categories = categories.filter((cat) => cat.id != category.id);
    categories.push(category);
    localStorage.setItem(
      CategoryHandler.CATEGORY_KEY,
      JSON.stringify(categories)
    );
  }

  static delete(id: number) {
    let categories: Category[] = CategoryHandler.getAll();
    categories = categories.filter((cat) => cat.id != id);
    localStorage.setItem(
      CategoryHandler.CATEGORY_KEY,
      JSON.stringify(categories)
    );
  }
}
