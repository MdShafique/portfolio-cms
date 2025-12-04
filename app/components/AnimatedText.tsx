export default function AnimatedText({ text }: { text: string }) {
  return (
    <h1 className="text-4xl font-extrabold leading-tight">
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          style={{
            display: "inline-block",
            animation: `fadeUp .5s ease ${index * 0.08}s both`,
          }}
          className="mr-2"
        >
          {word}
        </span>
      ))}
    </h1>
  );
}
