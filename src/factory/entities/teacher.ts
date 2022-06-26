export interface TeacherProperties {
    name: string;
}

export default class Teacher {
    name: string;

    constructor(properties: TeacherProperties) {
        this.name = properties.name;
    }
}
