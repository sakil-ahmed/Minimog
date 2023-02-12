import styled from "styled-components";
import { media } from "./Responsive";

const StyledShop = styled.section`
  .card_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    padding-top: 50px;
    ${media.up("md")} {
      grid-template-columns: 1fr 1fr 1fr;
    }
    ${media.up("lg")} {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
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

export default StyledShop;
