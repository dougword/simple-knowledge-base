export class Category {
    id: number;
    description: string;
    abbreviation: string;

    constructor(id: number, description: string, abbreviation: string) {
        this.id = id;
        this.description = description;
        this.abbreviation = abbreviation;
    }
}