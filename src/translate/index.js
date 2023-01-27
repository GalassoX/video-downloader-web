import { language } from './data';

export default function translate(code) { return language[code] || 'Translate not defined' }