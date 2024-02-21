export type ButtonType = {
  title: string,
  type?: "button" | "submit"
  disabled?: boolean,
  handler: () => void;
  buttonClass?: string;
};