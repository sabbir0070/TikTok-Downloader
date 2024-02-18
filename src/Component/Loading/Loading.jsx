import loading from "/src/assets/images/loading.gif";
const Loading = () => {
  return (
    <div className="bg">
      <img src={loading} className="downloadLoader"  alt="loading" />{" "}
    </div>
  );
};

export default Loading;
