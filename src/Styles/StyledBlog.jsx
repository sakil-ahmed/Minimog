import styled from "styled-components";
import { THEME } from "./Theme";

export const StyledBlogs = styled.div`
  .blog-card-container {
    display: flex;
    flex-wrap: wrap;

    justify-content: center;
    .blog-card {
      padding: 20px;
      width: 30%;
      margin: 20px;
      border-radius: 10px;
      transition: all cubic-bezier(0.39, 0.575, 0.565, 1);
      &:hover {
        box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
      }

      @media (max-width: 992px) {
        width: 50%;
      }
      @media (max-width: 576px) {
        width: 100%;
      }
    }
  }
  .btn {
    padding: 0 33px;
    min-height: 45px;
    border: 1px solid ${THEME.colors.primary};
    border-radius: 5px;
    background: transparent;
    font-weight: 500;
    color: ${THEME.colors.primary};
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${THEME.colors.primary};
      color: ${THEME.colors.light};
      box-shadow: 0 0 0 0.2rem ${THEME.colors.primary};
    }
  }
`;
