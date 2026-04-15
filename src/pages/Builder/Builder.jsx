import ComponentBuilder from './ComponentBuilder'

export default function Builder() {
  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "20px", color: "#333" }}>
        Build Your Website
      </h1>
      <p style={{ fontSize: "18px", color: "#666", marginBottom: "40px" }}>
        Choose the features you want included in your custom website.
      </p>
      <ComponentBuilder />
    </div>
  );
}
