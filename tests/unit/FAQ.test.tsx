import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FAQ } from "../../components/sections/FAQ";

describe("FAQ", () => {
  it("отображает все 6 вопросов", () => {
    render(<FAQ />);
    expect(screen.getAllByRole("button")).toHaveLength(6);
  });

  it("по умолчанию ответы скрыты", () => {
    render(<FAQ />);
    const answers = screen.queryAllByTestId("faq-answer");
    answers.forEach((a) => {
      expect(a).not.toBeVisible();
    });
  });

  it("клик по вопросу раскрывает ответ", () => {
    render(<FAQ />);
    const firstButton = screen.getAllByRole("button")[0];
    fireEvent.click(firstButton);
    const answers = screen.getAllByTestId("faq-answer");
    expect(answers[0]).toBeVisible();
  });

  it("повторный клик закрывает ответ", () => {
    render(<FAQ />);
    const firstButton = screen.getAllByRole("button")[0];
    fireEvent.click(firstButton);
    fireEvent.click(firstButton);
    const answers = screen.getAllByTestId("faq-answer");
    expect(answers[0]).not.toBeVisible();
  });
});
