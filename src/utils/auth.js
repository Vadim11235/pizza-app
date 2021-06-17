import { useEffect } from "react";
import { usePOST } from "./useAJAX";

const AuthAdmin = () => {
  const { isLoading, isError, data, error, sendData } = usePOST(
    'http://localhost:8080/v2/admin-auth/login',
    {
      email: "example@email.com",
      password: "password"
    }
  );

  useEffect(() => {
    sendData();
  }, []);

  if(isLoading) {
    return <div>Loading..</div>;
  }

  if(isError) {
    return <div>Error: <span>{error}</span></div>;
  }

  localStorage.setItem('token', data.token);
  return <div>Token: {data.token}</div>;
};

const PostAddIngridient = ({image, preview}) => {
  console.log(image, preview);
  const { isLoading, isError, data, error, sendData } = usePOST(
    'http://localhost:8080/v2/ingredients',
    {
      name: 'test',
      slug: 'тест',
      price: 20,
      category: 'sauces',
      image: image,
      thumbnail: preview
    },
    {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  );

  useEffect(() => {
    sendData();
  }, []);

  if(isLoading) {
    return <div>Loading..</div>;
  }

  if(isError) {
    return <div>Error: <span>{error}</span></div>;
  }

  console.log(data);
  return <div>Успешно добавлен: {data.id}</div>;
};

export {AuthAdmin, PostAddIngridient};