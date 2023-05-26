import Loading from '../components/Loading'
import React, { Suspense, useEffect, useState } from 'react';



export default function PageLoad ({children}) {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation, e.g., fetching data
    const fetchData = async () => {
      // Simulate a delay of 2 seconds
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Set isLoading to false to indicate component is ready to render
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading/>}>
      {children}
    </Suspense>
)
} 
