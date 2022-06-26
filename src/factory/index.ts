import TeacherFactory, { TEACHER_TYPE } from './factory';

export const execute = () => {
    const codingTeacher = TeacherFactory.getTeacher(TEACHER_TYPE.CODING, {
        programmingLanguage: 'JavaScript',
        name: 'John',
    });

    console.dir(codingTeacher);

    const musicTeacher = TeacherFactory.getTeacher(TEACHER_TYPE.MUSIC, {
        instrument: 'Guitar',
        name: 'Andy',
    });

    console.dir(musicTeacher);
};
