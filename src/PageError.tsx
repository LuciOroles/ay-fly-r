import React, { FunctionComponent } from 'react';

type PageErrorType = {
  error: any;
};

const PageError: FunctionComponent<PageErrorType> = ({ error }) => {
  return <div className="error">{error.message || 'some error ocurred'}</div>;
};

export default PageError;
