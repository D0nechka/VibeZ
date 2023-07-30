import { useState } from 'react';

interface UseAsyncLoadingResult<T extends (...args: Parameters<T>) => Promise<any>> {
    resultFunc: (...args: Parameters<T>) => Promise<ReturnType<T>>;
    data: Awaited<Promise<ReturnType<T>>> | null;
    isLoading: boolean;
    error: string;
}

export function useAsyncLoading
    <T extends (...args: Parameters<T>) => Promise<any>>(asyncFunction: T):
    UseAsyncLoadingResult<T>
{
    const [ isLoading, setIsLoading ] = useState(false);
    const [ error, setError ] = useState('');
    const [ data, setData ] = useState<Awaited<ReturnType<typeof asyncFunction>> | null>(null);

    async function asyncWrapper(...args: Parameters<T>): Promise<ReturnType<T>> {
        try {
            setIsLoading(true);
            setError('');
            const result = await asyncFunction(...args);

            if(typeof result === 'string') {
                setError(result);
            } else {
                setData(result);
            }

            return result;
        } finally {
            setIsLoading(false);
        }
    }

    return {
        resultFunc: asyncWrapper,
        isLoading,
        error,
        data,
    };
}
