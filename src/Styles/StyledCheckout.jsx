import styled from "styled-components";

const StyledCheckout = styled.section`
  .collection_header {
    padding: 50px 0;
    &_title {
      text-align: center;
      font-size: 42px;
      line-height: 2rem;
      font-weight: 400;
      margin-bottom: 10px;
    }
    &_links {
      display: flex;
      align-items: center;
      justify-content: center;
      .link {
        padding: 8px 16px;
        transition: all 0.75s cubic-bezier(0, 0, 0.2, 1);
        &:hover {
          color: #999;
        }
      }
      &_icon {
        width: 12px;
        height: 12px;
      }
      &_text {
        padding: 8px 16px;
      }
    }
  }
`;

export default StyledCheckout;
