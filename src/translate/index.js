import spanish from './langs/es.json';
import english from './langs/en.json';

const data = [
    {
        module: spanish,
        test: /^es/
    },
    {
        module: english,
        test: /^en/
    }
]

export default function translate(code) {
    const lang = new Intl.Locale(navigator.language).language;
    const translate = data.find(d => d.test.test(lang))
    return translate?.module[code] ?? 'Undefined translate'
}