import useWindowidth from "./Hook/useWindowidth";

export default function LayoutComponentOne() {
  const screen = useWindowidth();

  return (
    <div>
      <h1>Your are Browsing on {screen ? "small" : "Large"} device...</h1>
    </div>
  );
}
