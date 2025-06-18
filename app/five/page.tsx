import React from 'react';
import { Metadata } from 'next';
import { StrokeAnimation } from './StrokeAnimation';

export const metadata: Metadata = {
    title: 'Stroke Animation',
    description: 'Mouse Interactive Stroke animation made using motion. Inspired by https://labs.aeoscompany.com',
};

const StrokeAnimationPage = () => {
    return <StrokeAnimation />;
};

export default StrokeAnimationPage;
