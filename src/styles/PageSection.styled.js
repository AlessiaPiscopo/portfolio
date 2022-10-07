import styled from "styled-components";

export const StyledPageSection = styled.section`
  .section-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    /* TODO: FIGURE THIS OUT !!!! */
    /* navbar height: 6rem */
    /* make anchor account for navbar height (by offsetting padding-top with negative margin-top) */
    /* padding: 8rem 2.4rem 2.4rem 2.4rem;
    margin-top: -8rem; */
    padding-top: 6rem;
    margin-top: -6rem;
  }

  h1 {
    font-size: 3rem;
    padding: 1.2rem 0;
  }
  h2 {
    padding: 0.8rem 0;
  }

  .section-intro {
    max-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;
