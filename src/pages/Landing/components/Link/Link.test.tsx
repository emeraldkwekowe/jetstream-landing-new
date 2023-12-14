import { render, screen } from "@testing-library/react";
import Link from "./Link";

function RenderComponent({
  type,
  children,
}: {
  type?: "text" | "flat" | "border";
  children: React.ReactNode;
}) {
  render(
    <Link href="#!" type={type}>
      {children}
    </Link>
  );
}

describe("Link element test", () => {
  RenderComponent({ children: "Test link" });
  it("should render the link and its children", () => {
    expect(screen.findByText("Test link")).toBeTruthy();
  });
});
