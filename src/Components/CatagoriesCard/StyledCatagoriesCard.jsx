import styled from "styled-components";

export const StyledCatagoriesCard = styled.div`
  .card {
    .card_thumbnail {
      margin-bottom: 21px;
      overflow: hidden;
      img {
        transition: all 0.75s cubic-bezier(0, 0, 0.2, 1);
        width: 100%;
        object-fit: cover;
      }
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
    .card_title {
      text-align: center;
      .title {
        font-size: 20px;
        line-height: 1.5;
        font-weight: 500;
      }
    }
  }
`;
