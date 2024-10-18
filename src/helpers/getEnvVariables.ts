export const getEnvVariables = () => {

    // ? From vite documentation
    // ? Only variables with VITE_ prefix are shown in code
    import.meta.env;

    return {
        ...import.meta.env
    }

}
