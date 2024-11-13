"use client";
interface ErrorPageProps {
  error: string;
  reset: () => void;
}
const errorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div>
      Server internal error
      <h2>{error}</h2>
      <button onClick={() => reset()}>Error Message</button>
    </div>
  );
};

export default errorPage;
