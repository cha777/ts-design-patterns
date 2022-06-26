import Teacher from './teacher';

export interface MusicTeacherProperties {
    name: string;
    instrument: string;
}

export default class MusicTeacher extends Teacher {
    instrument: string;

    constructor(properties: MusicTeacherProperties) {
        super(properties);
        this.instrument = properties.instrument;
    }
}
