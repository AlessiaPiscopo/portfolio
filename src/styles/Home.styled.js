import styled from "styled-components";

// TODO: use props to change section background colors?
// TODO: Texture over bg?

export const StyledHomePage = styled.div``;

export const PageSection = styled.article`
  border: 2px solid green;
  background-color: #e4eae9;

  .anchor {
    padding-top: 24rem;
    margin-top: -24rem;
  }

  .section-header {
    /* border: 2px solid purple; */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 4.8rem 3.2rem;
    /* padding: 4.8rem 2.4rem 3.2rem 2.4rem; */
    /* margin-bottom: 3.2rem; */
  }

  h1 {
    /* border: 2px solid green; */
    padding-bottom: 1.2rem;
  }

  .section-intro {
    max-width: 650px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

// ---- PROJECTS
export const ProjectsList = styled.section`
  /* background-color: #e4eae9; */

  .projects-list,
  .project-cards {
    /* border: 2px solid blue; */
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3.2rem;
  }
`;

export const ProjectCard = styled.div`
  /* border: 1px solid red; */
  background-color: rgb(248, 249, 250, 60%);
  padding: 1.6rem;
  max-width: 275px;
  border-radius: 20px;
  font-size: 1.4rem;

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    .project-preview-image {
      /* background-color: grey; */
      width: 240px;
      /* height: 50%; */
      border-radius: 20px;
      margin: auto;
      margin-bottom: 1.2rem;
    }

    .project-name {
      font-family: "Roboto Mono", monospace;
      font-size: 2rem;
      margin-bottom: 0.8rem;
      text-align: center;
    }

    .stack-list {
      /* width: 100%; */
      display: flex;
      flex-wrap: wrap;
    }
    .stack-list-item {
      margin: 0 0.8rem 0.4rem 0;
      background-color: var(--color-gray-3);
      color: var(--color-gray-6);
      border-radius: 50px;
      padding: 0.4rem 1.2rem;
    }
    .project-description {
    }
  }
`;

// ---- ABOUT
export const AboutSection = styled.section`
  background-color: red;
  width: 100%;
`;
