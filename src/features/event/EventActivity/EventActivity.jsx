import React, { Fragment } from 'react';
import { Header, Segment } from 'semantic-ui-react';

const EventActivity = () => {
  return (
    <Fragment>
      <Header attached='top' content='Aktifitas Terbaru' />
      <Segment attached>
        <p>Ini Aktivitas</p>
      </Segment>
    </Fragment>
  );
};

export default EventActivity;
