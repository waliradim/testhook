import useWindowidth from "./Hook/useWindowidth";

export default function LayoutComponentTwo() {
  const screen = useWindowidth(600);

  return (
    <div className={screen ? "small" : "Large"}>
      <h1>This another Component...</h1>
    </div>
  );
}
