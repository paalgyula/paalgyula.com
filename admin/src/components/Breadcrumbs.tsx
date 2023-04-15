import { FC } from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumbs';
import { Link, Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import { IBreadcrumb } from '../providers/AppStateProvider';
import shortid from 'shortid';

const Breadcrumbs: FC = () => {
  const { breadcrumb } = useBreadcrumb();

  if (!breadcrumb) {
    return null;
  }

  const LinkSegment: FC<IBreadcrumb> = ({ title, link }) => (
    <Link key="2" underline="hover" color="inherit" href={link}>
      {title}
    </Link>
  );

  const TextSegment: FC<{ title: string }> = ({ title }) => (
    <Typography key="3" color="inherit">
      {title}
    </Typography>
  );

  return (
    <>
      <MuiBreadcrumbs
        sx={{ color: '#fff' }}
        separator="›"
        aria-label="breadcrumb">
        {breadcrumb?.map((b) =>
          b.link ? (
            <LinkSegment key={shortid()} title={b.title} link={b.link} />
          ) : (
            <TextSegment key={shortid()} title={b.title} />
          )
        )}
      </MuiBreadcrumbs>
    </>
  );
};

export default Breadcrumbs;
