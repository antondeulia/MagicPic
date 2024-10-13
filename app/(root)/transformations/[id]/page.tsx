import React from "react";

type TransformationPageProps = {
  params: {
    id: string;
  };
};

const TransformationPage = ({ params }: TransformationPageProps) => {
  return <div>Transformation Page: {params.id}</div>;
};

export default TransformationPage;
