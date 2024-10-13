type UpdateTransformationPageProps = {
  params: {
    id: string;
  };
};

const UpdateTransformationPage = ({
  params,
}: UpdateTransformationPageProps) => {
  return <div>Update Transformation Page: {params.id}</div>;
};

export default UpdateTransformationPage;
