import React from "react";
import { PropTypes } from "prop-types";
import { Toaster } from "react-hot-toast";

import { AppLayout } from "../../components/AppLayout";

function AppContainer({ children }) {
  return (
    <AppLayout>
      <Toaster/>
      {children}
    </AppLayout>
  );
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
