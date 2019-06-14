import React, { FC } from "react";

type Title = {
  name: string;
};

const Title: FC<Title> = ({ name }) => <h1>Hello, my name is {name}</h1>;

type ContainerProps = {
  children: JSX.Element[];
};

const Container: FC<ContainerProps> = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh"
    }}
  >
    {children}
  </div>
);

const Math: FC = () => <h2>{2 + 2}</h2>;

export const App: FC = () => (
  <Container>
    <Title key="title" name="Milenko" />
    <Math key="math" />
  </Container>
);
