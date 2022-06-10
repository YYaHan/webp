import React, { useEffect, useState } from "react";
import { Button, Grid, Header, Icon, Image, Segment } from "semantic-ui-react";
import { Stack } from "@mui/material";
import "./App.css";
const App = () => {
  const url = "https://api.github.com/users/cjwu";
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="mt-10">
      <Stack className="items-center">
        <Segment>
          <Image className="rounded-full"
            circular
            src={
              data?.avatar_url ||
              "https://react.semantic-ui.com/images/wireframe/square-image.png"
            }
            size="medium"
          />
          <Header textAlign="center" style={{ fontSize: 70 }}>
            {data?.name}
          </Header>
          <Header textAlign="center">{data?.login}</Header>
          <Button fluid>Edit profile</Button>
          <Grid textAlign="center" style={{ fontSize: 20 }}>
            <Grid.Row>
              <Icon name="users" />
              {data?.followers || 0}Followers．{data?.following || 0}Following．
              <Icon name="star outline" />
            </Grid.Row>
            <Grid.Row>
              <Icon name="map marker alternate" />
              {data?.location}
            </Grid.Row>
            <Grid.Row className="font-bold italic">
              <Icon name="linkify" link />
              GitHub網址: {data?.html_url}
            </Grid.Row>
            <Grid.Row className="font-bold italic">
              <Icon name="linkify" link />
              部落格: {data?.blog}
            </Grid.Row>
          </Grid>
        </Segment>
      </Stack>
    </div>
  );
};

export default App;
