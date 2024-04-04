import { FC, PropsWithChildren } from "react";
import { Navigate, Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

export const PrivateRoute: FC<{ authId: string } & PropsWithChildren> = ({
  authId,
  children,
}) => {
  const { data, loading } = useQuery(USER_AUTH_QUERY);

  if (loading) return null;

  return data.user.auth.id === authId ? <>{children}</> : <Navigate to="/" />;
};

const USER_AUTH_QUERY = gql`
  query UserAuthQuery {
    currentUser {
      auth {
        id
      }
    }
  }
`;
