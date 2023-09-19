import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import DisplayBalance from "./DisplayBalance";

function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance
              title={"Income"}
              value={"202,3.50"}
              color={"green"}
            />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title={"Expenses"} value={"645.0"} color={"red"} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
