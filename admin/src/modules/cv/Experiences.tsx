import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import exp from '../../data/experiences.json';
import shortid from 'shortid';

const fetchExperiences = async (): Promise<IExperience[]> => {
  return exp;
};

export const Experiences = () => {
  const [experiences, setExperiences] = useState<IExperience[]>([]);

  useEffect(() => {
    fetchExperiences().then(setExperiences);
  }, []);

  return (
    <Card sx={{ overflow: 'auto' }}>
      <List>
        {experiences.map((e) => (
          <Fragment key={shortid()}>
            <ListItem key={shortid()}>
              <ListItemText
                primary={e.jobTitle}
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary">
                      {e.employer.name}
                    </Typography>
                    {' - '}
                    {e.description}
                  </>
                }
              />
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </Card>
  );
};
