function VideoSection() {
  return (
    <div style={styles.box}>
      <p>▶ YouTube Integration</p>
    </div>
  );
}

const styles = {
  box: {
    height: "150px",
    border: "1px solid white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default VideoSection;