import CodingTeacher, { CodingTeacherProperties } from './entities/coding-teacher';
import MusicTeacher, { MusicTeacherProperties } from './entities/music-teacher';

export enum TEACHER_TYPE {
    CODING = 'coding',
    MUSIC = 'music',
}

// This is the convensional method in writing condition dependent classes
/* 
class Teacher {
    name: string;
    programmingLanguage: string;
    instrument: string;

    constructor(type: string, name: string, instrument: string, programmingLanguage: string) {
        this.name = name;

        if (type === TEACHER_TYPE.CODING) {
            this.programmingLanguage = programmingLanguage;
        } else if (type === TEACHER_TYPE.MUSIC) {
            this.instrument = instrument;
        }
    }
}
*/

export default class TeacherFactory {
    public static getTeacher(type: TEACHER_TYPE.MUSIC, properties: MusicTeacherProperties): MusicTeacher;
    public static getTeacher(type: TEACHER_TYPE.CODING, properties: CodingTeacherProperties): CodingTeacher;

    public static getTeacher(type: TEACHER_TYPE, properties: MusicTeacherProperties & CodingTeacherProperties) {
        switch (type) {
            case TEACHER_TYPE.CODING:
                return new CodingTeacher(properties);
            case TEACHER_TYPE.MUSIC:
                return new MusicTeacher(properties);
            default:
                throw new Error('Wrong teacher type chosen');
        }
    }
}
