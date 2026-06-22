'use client'

import { OnboardingForm } from '@/components/onboarding';
import React from 'react';

const RegisterPage = () => {
    return (
        <div>
            <OnboardingForm
            onComplete={(data) => {
                console.log('Registration data:', data);
                // Handle registration logic here, e.g., send data to the server
            }}
            />
        </div>
    );
};

export default RegisterPage;