import styled, { css } from "styled-components";

const commonStyles = css`
  color: red;
  border: 1px solid black;
  font-style: italic;
`

const altCommonStyles = css`
  color: black;
  border: 1px solid red;
  font-style: inherit;
`

export const StyledButton = styled.button`
  background-color: ${({ selected }) => (selected ? "aquamarine" : "beige")};
  ${commonStyles}

  &:hover {
    transform: scale(${({scale}) => scale});
  }
`

export const StyledAnotherButton = styled.button`
  font-size: 3rem;
  ${commonStyles}
`


export const StyledSecondaryButton = styled(StyledButton)`
  font-weight: bold;
`