import { useState } from "react";

export const useToggle = () => {
  const [isYear, setIsYear] = useState<boolean>(false);

  const openShare = (): void => setIsYear(true);
  const closeShare = (): void => setIsYear(false);
  const toggleYear = (): void => setIsYear(!isYear);

  return { openShare, closeShare, isYear, toggleYear };
};
