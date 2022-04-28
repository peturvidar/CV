import "./App.css";

const Text = ({ dataObject }) => {
  const { workplace, period, title } = dataObject;
  return (
    <>
      <div>
        <p>{workplace}</p>
      </div>
      <div>
        <p>{period}</p>
      </div>
      <div>
        <p className="Text-30">{title}</p>
      </div>
    </>
  );
};

export default Text;
