function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Website to sell myself.</h1>
      <p style={styles.subtitle}>
        I build systems, solve real problems, and ship things that matter.
      </p>
    </section>
  );
}

const styles = {
  hero: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center" as const,
    background: "#0f0f0f",
    color: "white",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    opacity: 0.7,
  },
};

export default Hero;