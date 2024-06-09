import React from 'react';

interface LoadingProps {
    text?: string;
}

const Loading: React.FC<LoadingProps> = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-primary-default border-t-transparent" />
        </div>
    );
};

export default Loading;