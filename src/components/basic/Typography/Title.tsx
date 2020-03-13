import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1``;

const defaultTitleStyle = `
  margin-top: 0;
  margin-bottom: 0.5em;
  font-weight: 600;
`;

const H1 = styled.h1`
  ${defaultTitleStyle}
  font-size: 38px;
  line-height: 1.23;
`;

const H2 = styled.h2`
  ${defaultTitleStyle}
  font-size: 30px;
  line-height: 1.35;
`;

const H3 = styled.h3`
  ${defaultTitleStyle}
  font-size: 24px;
  line-height: 1.35;
`;

const H4 = styled.h4`
  ${defaultTitleStyle}
  font-size: 20px;
  line-height: 1.4;
`;

const TITLE_ELEMENT_LIST = [1, 2, 3, 4];

type TitleProps = {
  level?: typeof TITLE_ELEMENT_LIST[number];
};

const Title: React.FC<TitleProps> = props => {
  const { level = 1, children, ...restProps } = props;
  let component: React.ComponentType<any> = H1;

  if (TITLE_ELEMENT_LIST.indexOf(level) !== -1) {
    switch (level) {
      case 2:
        component = H2;
        break;
      case 3:
        component = H3;
        break;
      case 4:
        component = H4;
        break;
      default:
        component = H1;
        break;
    }
  }

  return (
    <StyledTitle as={component} {...restProps}>
      {children}
    </StyledTitle>
  );
};

export { Title };
