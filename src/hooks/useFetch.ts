import { useEffect, useState } from "react";

export const useFetch = <T>(url:string) => {
  const [data,setData] = useState<T>()
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [error,setError] = useState<string|null>(null)


  useEffect(() => {
    async function  fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        }).then((res) => res.json());
        console.log(response.data);
        setData(response);
        setIsLoading(false);
      }catch (e){
        console.log(e)
        setIsLoading(false);
        setError("Une erreur est survenue")
      }

    }
    fetchData().then()
  }, [url]);

  return {data,isLoading,error}
};