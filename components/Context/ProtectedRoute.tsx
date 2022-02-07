import React, { FC } from "react";
import { useRouter } from "next/router";
import { auth } from "../../lib/firebase";

export function protectedRoute(Component: FC) {
  return function ProtectedRoute(props: any) {
    const route = useRouter();
    const x = auth.currentUser;
    console.log(auth.currentUser);

    if (!x) {
      route.replace("/user/login");
      return (
        <div className="w-full h-full flex justify-center items-center">
          <div>Loading ...</div>
        </div>
      );
    }
    return <Component {...props} />;
  };
}

export function publicRoute(Component: FC) {
  return function PublicRoute(props: any) {
    const route = useRouter();
    const x = auth.currentUser;
    console.log(auth.currentUser);

    if (x) {
      route.replace("/");
      return (
        <div className="w-full h-full flex justify-center items-center">
          <div>Loading ...</div>
        </div>
      );
    }
    return <Component {...props} />;
  };
}
