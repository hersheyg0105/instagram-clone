import { getProviders } from "next-auth/react";
import React from "react";

const signIn = () => {
  return (
    <div>
      <h1>I am the sign in page</h1>
    </div>
  );
};

// export async function getServerSideProps() {
//   const providers = getProviders();
// }

export default signIn;
