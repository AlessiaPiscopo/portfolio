import styled from "styled-components";

export const StyledHomePage = styled.div``;

// ---- page section container
// TODO: move to separate component when starting to fill in markdown data
export const PageSection = styled.article`
  background-color: #e4eae9;
  padding: 3.2rem 3.2rem 1.6rem 3.2rem;

  .section-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-bottom: 2.4rem;

    /* make anchor account for navbar height */
    padding-top: 4.8rem;
    margin-top: -4.8rem;
  }
  h1 {
    font-size: 3rem;
    padding: 1.2rem 0;
  }
  .section-intro {
    max-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

// ---- PROJECTS
export const ProjectsList = styled.ul`
  /* background-color: #e4eae9; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
`;

// TODO: add card hover effect animation
export const ProjectCard = styled.li`
  background-color: rgb(248, 249, 250, 60%);
  padding: 1.6rem;
  max-width: 255px;
  border-radius: 20px;
  font-size: 1.4rem;

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .project-name {
      /* border: 2px solid red; */
      font-family: "Roboto Mono", monospace;
      color: var(--text-color-gray);
      font-size: 1.8rem;
      text-align: center;
    }

    .project-preview-image {
      width: 240px;
      border-radius: 10px;
    }

    .project-description {
      font-size: 1.35rem;
      /* padding-bottom: 0.8rem; */
    }
  }

  .icon-links {
    color: var(--color-gray-5);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1.2rem;
    padding-right: 0.4rem;

    .github-icon {
      font-size: 1.8rem;
    }
    .external-link-icon {
      font-size: 1.6rem;
    }

    .visually-hidden {
      display: none;
    }
  }
`;

export const StackList = styled.ul`
  font-size: 1.3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding: 0.6rem 0;
`;

export const StackListItem = styled.li`
  background-color: var(--color-gray-3);
  color: var(--color-gray-6);
  border-radius: 50px;
  padding: 0.4rem 1.2rem;
`;

// ---- ABOUT
export const AboutSection = styled.section`
  width: 100%;
`;
