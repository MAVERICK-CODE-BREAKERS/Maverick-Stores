import styled from 'styled-components'
import './footer.css'

export const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 2rem;
    color: var(--mainGrey);
  }
  .header {
    color: var(--mainWhite);
    font-weight: 900;
  }
  .fa {
    color: var(--mainWhite);
    font-size: 1rem;
    padding-bottom: 1rem;
  }
  .footer-bottom {
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
  Link:hover {
    color: var(--mainLightGrey);
  }
`
