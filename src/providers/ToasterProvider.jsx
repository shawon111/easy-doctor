import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToasterProvider = () => {
    return (
        <div>
            <Toaster
                position="top-right"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 5000,
                    removeDelay: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                    error: {
                        duration: 3000,
                        iconTheme: {    
                            primary: 'red',
                            secondary: 'black',
                        },
                    },
                    warning: {
                        duration: 3000,
                        iconTheme: {
                            primary: 'orange',
                            secondary: 'black',
                        },
                    },
                }}
            />
        </div>
    );
};

export default ToasterProvider;