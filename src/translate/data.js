const lang = new Intl.Locale(navigator.language).language;

export const language =
    await import(`./langs/${lang}.json`)
        .catch(async () => await import('./langs/en.json')); // Ingles por defecto si el lenguaje no esta definido.