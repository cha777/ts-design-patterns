import Singleton from './singleton';

export const execute = () => {
    const firstInstance = Singleton.getInstance();
    const secondInstance = Singleton.getInstance();

    console.log(`Sigleton instances are equal: ${firstInstance === secondInstance}`);
};
