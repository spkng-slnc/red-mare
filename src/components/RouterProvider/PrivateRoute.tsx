import { FC, ReactNode } from "react";
import { Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import { Home } from "../../features";

interface PrivateRouteProps {
  path: string;
  element: ReactNode;
  authId: string;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({
  authId,
  element,
  path,
}) => {
  const { data, loading } = useQuery(USER_AUTH_QUERY);

  if (loading) return null;

  if (data.user.auth.id !== authId)
    return <Route path="/" element={<Home />} />;

  return <Route path={path} element={element} />;
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
