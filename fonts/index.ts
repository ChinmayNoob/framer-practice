import localFont from 'next/font/local';
import { Instrument_Serif } from 'next/font/google';

export const satoshi = localFont({
    src: '../public/fonts/Satoshi-Variable.ttf',
    variable: '--font-satoshi',
    display: 'swap',
});

export const instrumentSerif = Instrument_Serif({
    subsets: ['latin'],
    variable: '--font-instrument-serif',
    weight: ['400'],
    display: 'swap',
}); 