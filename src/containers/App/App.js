import React from "react";
import { PropTypes } from "prop-types";

import { AppLayout } from "../../components/AppLayout";

function AppContainer({ children }) {
  return <AppLayout>{children}</AppLayout>;
}

AppContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContainer;
