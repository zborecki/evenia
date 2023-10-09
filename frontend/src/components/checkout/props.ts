export interface CheckoutDetailProps {
  title: string;
  price: number | string;
}

export interface CheckoutProps {
  onClose: () => void;
  isOpen: boolean;
}
