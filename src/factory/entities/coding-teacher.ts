import Teacher from './teacher';

export interface CodingTeacherProperties {
    name: string;
    programmingLanguage: string;
}

export default class CodingTeacher extends Teacher {
    programmingLanguage: string;

    constructor(properties: CodingTeacherProperties) {
        super(properties);
        this.programmingLanguage = properties.programmingLanguage;
    }
}
