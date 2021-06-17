import { usePOST } from "./useAJAX";

export const Auth = () => {
  const { isLoading, xhr, isError, data, error } = usePOST(
    'http://localhost:8080/v2/admin-auth/login',
    {
      email: "example@email.com",
      password: "password"
    }
  );

  if (isError) {
    return <>Error: {JSON.stringify(error)}</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  console.log(xhr);

  return <>{JSON.stringify(data)}</>;
};