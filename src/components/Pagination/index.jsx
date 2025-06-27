import { Container } from "../ui/Container";
import * as SC from "./styles";

export const Pagination = ({ onPageChange, totalPages }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Container>
      <SC.Pages>
        {pageNumbers.map((number) => (
          <SC.Page key={number} onClick={() => handlePageChange(number)}>
            {number}
          </SC.Page>
        ))}
      </SC.Pages>
    </Container>
  );
};
